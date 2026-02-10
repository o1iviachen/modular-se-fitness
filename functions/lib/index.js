"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyWorkoutReminder = exports.onNewAthlete = exports.sendSupportEmail = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const nodemailer = __importStar(require("nodemailer"));
admin.initializeApp();
const db = admin.firestore();
// ---------------------------------------------------------------------------
// SMTP Transport — configure via Firebase environment config:
//   firebase functions:config:set smtp.host="smtp.gmail.com" smtp.port="465"
//       smtp.user="you@gmail.com" smtp.pass="app-password"
//
// For Gmail: enable 2FA, then create an App Password at
//   https://myaccount.google.com/apppasswords
// ---------------------------------------------------------------------------
function getTransport() {
    const cfg = functions.config().smtp;
    return nodemailer.createTransport({
        host: cfg.host,
        port: Number(cfg.port),
        secure: true,
        auth: { user: cfg.user, pass: cfg.pass },
    });
}
const APP_URL = "https://se-fitness-c2ff7.web.app";
// Logo served from the deployed web app's public/ directory
const LOGO_URL = `${APP_URL}/se-logo.png`;
// ===========================
// EMAIL TEMPLATES
// ===========================
function workoutReminderEmail(firstName, coachName, dateFormatted, dayName, exercises) {
    const exerciseRows = exercises
        .map((ex, i) => {
        const letter = String.fromCharCode(65 + i);
        return `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
            <strong style="color: #000000;">${letter}) ${ex.name}</strong><br/>
            <span style="color: #666666; font-size: 14px;">${ex.sets}</span>
          </td>
        </tr>`;
    })
        .join("");
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <!-- Top accent bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #FFD000, #FFE54D);"></td>
          </tr>
          <!-- Logo -->
          <tr>
            <td align="center" style="padding: 32px 0 16px;">
              <img src="${LOGO_URL}" alt="SE Fitness" width="80" height="80" style="display: block; border-radius: 16px;" />
            </td>
          </tr>
          <!-- Heading -->
          <tr>
            <td align="center" style="padding: 0 0 32px;">
              <h1 style="margin: 0; font-size: 22px; color: #000000;">Here's your training</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 0 0 24px;">
                Hey ${firstName},
              </p>
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 0 0 24px;">
                Here's your workout for ${dateFormatted}:
              </p>
              <!-- Day header -->
              <p style="font-weight: 700; font-size: 16px; color: #000000; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 2px solid #FFD000;">
                ${dayName}
              </p>
              <!-- Exercises -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${exerciseRows}
              </table>

              <!-- Coach sign-off -->
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 32px 0 0;">
                – Your Coach,<br/>
                <strong>${coachName}</strong>
              </p>
            </td>
          </tr>
          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 0 40px 40px;">
              <a href="${APP_URL}" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
                Open in SE Fitness
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 20px 40px; border-top: 1px solid #f0f0f0;">
              <p style="margin: 0; font-size: 12px; color: #999999; text-align: center;">
                You're receiving this because you have workout reminders enabled.<br/>
                Manage your preferences in the SE Fitness app.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
function newAthleteJoinedEmail(coachFirstName, athleteFirstName, athleteLastName, athleteEmail) {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <!-- Top accent bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #FFD000, #FFE54D);"></td>
          </tr>
          <!-- Logo -->
          <tr>
            <td align="center" style="padding: 32px 0 16px;">
              <img src="${LOGO_URL}" alt="SE Fitness" width="80" height="80" style="display: block; border-radius: 16px;" />
            </td>
          </tr>
          <!-- Heading -->
          <tr>
            <td align="center" style="padding: 0 0 32px;">
              <h1 style="margin: 0; font-size: 22px; color: #000000;">New Athlete Joined!</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 0 0 24px;">
                Hey ${coachFirstName},
              </p>
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 0 0 24px;">
                A new athlete has joined using your coach code:
              </p>
              <!-- Athlete card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; border-radius: 8px; border: 1px solid #f0f0f0;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px; font-size: 18px; font-weight: 700; color: #000000;">
                      ${athleteFirstName} ${athleteLastName}
                    </p>
                    <p style="margin: 0; font-size: 14px; color: #666666;">
                      ${athleteEmail}
                    </p>
                  </td>
                </tr>
              </table>
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 24px 0 0;">
                Head to the app to start assigning workouts and get them training!
              </p>
            </td>
          </tr>
          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 0 40px 40px;">
              <a href="${APP_URL}" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
                Open SE Fitness
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 20px 40px; border-top: 1px solid #f0f0f0;">
              <p style="margin: 0; font-size: 12px; color: #999999; text-align: center;">
                You're receiving this because you have new athlete notifications enabled.<br/>
                Manage your preferences in the SE Fitness app.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
// ===========================
// CALLABLE FUNCTIONS
// ===========================
/**
 * Callable: send a support email from the app.
 * Expects { subject: string, message: string, fromEmail: string, fromName: string }
 */
exports.sendSupportEmail = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "Must be logged in to send support emails.");
    }
    const { subject, message, fromEmail, fromName } = data;
    if (!subject || !message || !fromEmail) {
        throw new functions.https.HttpsError("invalid-argument", "subject, message, and fromEmail are required.");
    }
    const cfg = functions.config().smtp;
    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;">
    <tr><td align="center" style="padding:40px 20px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr><td style="height:4px;background:linear-gradient(90deg,#FFD000,#FFE54D);"></td></tr>
        <tr><td align="center" style="padding:32px 0 16px;">
          <img src="${LOGO_URL}" alt="SE Fitness" width="80" height="80" style="display:block;border-radius:16px;" />
        </td></tr>
        <tr><td align="center" style="padding:0 0 24px;">
          <h1 style="margin:0;font-size:22px;color:#000;">Support Request</h1>
        </td></tr>
        <tr><td style="padding:0 40px 32px;">
          <p style="color:#666;font-size:14px;margin:0 0 4px;"><strong>From:</strong> ${fromName} (${fromEmail})</p>
          <p style="color:#666;font-size:14px;margin:0 0 16px;"><strong>Subject:</strong> ${subject}</p>
          <div style="background:#fafafa;border-radius:8px;border:1px solid #f0f0f0;padding:20px;">
            <p style="color:#333;font-size:16px;line-height:1.6;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
        </td></tr>
        <tr><td style="background:#fafafa;padding:20px 40px;border-top:1px solid #f0f0f0;">
          <p style="margin:0;font-size:12px;color:#999;text-align:center;">
            Sent from the SE Fitness app
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
    try {
        const transport = getTransport();
        await transport.sendMail({
            from: `"SE Fitness" <${cfg.user}>`,
            replyTo: fromEmail,
            to: cfg.user, // support goes to the configured email
            subject: `[Support] ${subject}`,
            html,
        });
        return { success: true };
    }
    catch (err) {
        functions.logger.error("Failed to send support email", err);
        throw new functions.https.HttpsError("internal", "Failed to send email.");
    }
});
// ===========================
// TRIGGERED FUNCTIONS
// ===========================
/**
 * Trigger: when a new user document is created with role === 'athlete'
 * Action: email the coach (if coach has newAthleteJoins + emailNotifications on)
 */
exports.onNewAthlete = functions.firestore
    .document("users/{userId}")
    .onCreate(async (snap) => {
    const data = snap.data();
    if (data.role !== "athlete" || !data.coachId)
        return;
    // Look up the coach
    const coachSnap = await db.doc(`users/${data.coachId}`).get();
    if (!coachSnap.exists)
        return;
    const coach = coachSnap.data();
    // Check coach notification preferences
    const ns = coach.notificationSettings || {};
    if (ns.emailNotifications === false || ns.newAthleteJoins === false)
        return;
    const html = newAthleteJoinedEmail(coach.firstName, data.firstName, data.lastName, data.email);
    try {
        const transport = getTransport();
        await transport.sendMail({
            from: `"SE Fitness" <${functions.config().smtp.user}>`,
            to: coach.email,
            subject: `${data.firstName} ${data.lastName} just joined SE Fitness!`,
            html,
        });
        functions.logger.info(`New athlete email sent to ${coach.email}`);
    }
    catch (err) {
        functions.logger.error("Failed to send new athlete email", err);
    }
});
/**
 * Scheduled: runs every day at midnight UTC.
 * For each athlete with workout reminders enabled and a workout today,
 * sends a reminder email.
 *
 * Note: runs at midnight UTC. Adjust the schedule string for your timezone,
 * e.g. "every day 00:00" with timeZone: "America/New_York"
 */
exports.dailyWorkoutReminder = functions.pubsub
    .schedule("every day 00:00")
    .timeZone("America/New_York")
    .onRun(async () => {
    // Today in YYYY-MM-DD (in the configured timezone)
    const now = new Date();
    const eastern = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const yyyy = eastern.getFullYear();
    const mm = String(eastern.getMonth() + 1).padStart(2, "0");
    const dd = String(eastern.getDate()).padStart(2, "0");
    const todayISO = `${yyyy}-${mm}-${dd}`;
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
    ];
    const dayName = dayNames[eastern.getDay()];
    // Format: "Monday, February 9, 2026"
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    const dateFormatted = `${dayName}, ${months[eastern.getMonth()]} ${eastern.getDate()}, ${yyyy}`;
    // Get all athletes
    const athletesSnap = await db
        .collection("users")
        .where("role", "==", "athlete")
        .get();
    for (const athleteDoc of athletesSnap.docs) {
        const athlete = athleteDoc.data();
        // Check notification preferences
        const ns = athlete.notificationSettings || {};
        if (ns.emailNotifications === false || ns.workoutReminder === false) {
            continue;
        }
        // Check for today's workout
        const workoutSnap = await db
            .doc(`users/${athleteDoc.id}/workouts/${todayISO}`)
            .get();
        if (!workoutSnap.exists)
            continue;
        const workout = workoutSnap.data();
        if (workout.isRestDay)
            continue;
        if (!workout.exercises || workout.exercises.length === 0)
            continue;
        // Look up coach name
        let coachName = "Your Coach";
        if (athlete.coachId) {
            const coachSnap = await db.doc(`users/${athlete.coachId}`).get();
            if (coachSnap.exists) {
                const coach = coachSnap.data();
                coachName = `${coach.firstName} ${coach.lastName}`;
            }
        }
        const exercises = workout.exercises.map((ex) => ({
            name: ex.name,
            sets: ex.sets || "",
        }));
        const html = workoutReminderEmail(athlete.firstName, coachName, dateFormatted, dayName, exercises);
        try {
            const transport = getTransport();
            await transport.sendMail({
                from: `"SE Fitness" <${functions.config().smtp.user}>`,
                to: athlete.email,
                subject: "You've received a workout.",
                html,
            });
            functions.logger.info(`Workout reminder sent to ${athlete.email} for ${todayISO}`);
        }
        catch (err) {
            functions.logger.error(`Failed to send workout reminder to ${athlete.email}`, err);
        }
    }
    return null;
});
//# sourceMappingURL=index.js.map