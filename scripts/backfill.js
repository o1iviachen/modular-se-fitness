/**
 * One-time backfill script for scalability improvements.
 *
 * 1. Backfills athletePhotoUrl / coachPhotoUrl on all conversation docs.
 * 2. Backfills totalWorkouts / completedWorkouts / completionRate / currentStreak on all athlete user docs.
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=path/to/serviceAccountKey.json node scripts/backfill.js
 */

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

async function backfillConversationPhotos() {
  console.log('--- Backfilling conversation photoUrls ---');
  const convoSnap = await db.collection('conversations').get();
  let updated = 0;

  for (const convoDoc of convoSnap.docs) {
    const data = convoDoc.data();
    const updates = {};

    if (data.athleteId && data.athletePhotoUrl === undefined) {
      const athleteSnap = await db.collection('users').doc(data.athleteId).get();
      if (athleteSnap.exists) {
        updates.athletePhotoUrl = athleteSnap.data().photoUrl || '';
      }
    }

    if (data.coachId && data.coachPhotoUrl === undefined) {
      const coachSnap = await db.collection('users').doc(data.coachId).get();
      if (coachSnap.exists) {
        updates.coachPhotoUrl = coachSnap.data().photoUrl || '';
      }
    }

    if (Object.keys(updates).length > 0) {
      await convoDoc.ref.update(updates);
      updated++;
    }
  }

  console.log(`Updated ${updated} of ${convoSnap.size} conversation docs.`);
}

async function backfillAthleteStats() {
  console.log('--- Backfilling athlete stats ---');
  const usersSnap = await db.collection('users').where('role', '==', 'athlete').get();
  const today = new Date().toISOString().split('T')[0];
  let updated = 0;

  for (const userDoc of usersSnap.docs) {
    const workoutsSnap = await db
      .collection('users')
      .doc(userDoc.id)
      .collection('workouts')
      .where('date', '<=', today)
      .orderBy('date', 'desc')
      .get();

    const workouts = workoutsSnap.docs
      .map((d) => d.data())
      .filter((w) => !w.isRestDay);

    const totalWorkouts = workouts.length;
    const completedWorkouts = workouts.filter((w) => w.completed).length;
    const completionRate = totalWorkouts > 0 ? Math.round((completedWorkouts / totalWorkouts) * 100) : 0;

    // Compute streak: consecutive completed workouts from most recent backward
    let currentStreak = 0;
    const sorted = [...workouts].sort((a, b) => (b.date > a.date ? 1 : -1));
    for (const w of sorted) {
      if (w.completed) {
        currentStreak++;
      } else {
        break;
      }
    }

    await userDoc.ref.update({
      totalWorkouts,
      completedWorkouts,
      completionRate,
      currentStreak,
    });
    updated++;
  }

  console.log(`Updated stats for ${updated} athletes.`);
}

async function main() {
  await backfillConversationPhotos();
  await backfillAthleteStats();
  console.log('Done!');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
