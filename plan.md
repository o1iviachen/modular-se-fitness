# Goals & Documents Persistence Plan

## Firestore Data Models

### Goals: `users/{athleteId}/goals/{auto-id}`
```
{
  title: string,
  target: string,
  deadline: string,
  completed: boolean,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Documents: `users/{athleteId}/documents/{auto-id}`
```
{
  name: string,           // original filename
  storagePath: string,    // Firebase Storage path for deletion
  downloadUrl: string,    // public download URL
  size: number,           // file size in bytes
  type: string,           // MIME type (application/pdf, image/png, etc.)
  createdAt: Timestamp
}
```

### Firebase Storage path
```
documents/{athleteId}/{docId}/{originalFilename}
```

---

## Implementation Steps

### Step 1: Initialize Firebase Storage
**File: `src/app/lib/firebase.ts`**
- Add `import { getStorage } from 'firebase/storage'`
- Export `storage = getStorage(app)`

### Step 2: Create `src/app/lib/goalService.ts`
Functions (mirror workoutService patterns):
- `subscribeToGoals(athleteId, callback)` — real-time listener via `onSnapshot`, ordered by `createdAt`
- `addGoal(athleteId, { title, target, deadline })` — `addDoc` with `completed: false` + timestamps
- `updateGoal(athleteId, goalId, updates)` — `updateDoc` for edit page saves + toggle complete
- `deleteGoal(athleteId, goalId)` — `deleteDoc`

### Step 3: Create `src/app/lib/documentService.ts`
Functions:
- `subscribeToDocuments(athleteId, callback)` — real-time listener ordered by `createdAt` desc
- `uploadDocument(athleteId, file: File)` — uploads to Storage, saves metadata to Firestore, returns void
- `deleteDocument(athleteId, docId, storagePath)` — deletes from both Storage and Firestore

### Step 4: Update Goals pages (4 files)

**`src/app/pages/athlete/Goals.tsx`**
- Replace hardcoded goals with `subscribeToGoals(user.id, ...)`
- Wire add/delete/toggle to goalService functions
- Pass goalId (Firestore doc ID) instead of numeric id

**`src/app/pages/coach/AthleteGoals.tsx`**
- Replace hardcoded goals with `subscribeToGoals(athleteId, ...)`
- Same CRUD wiring

**`src/app/pages/athlete/EditGoal.tsx`**
- `handleSave` calls `updateGoal(user.id, goalId, editedGoal)` then navigates back

**`src/app/pages/coach/EditGoal.tsx`**
- `handleSave` calls `updateGoal(athleteId, goalId, editedGoal)` then navigates back

### Step 5: Update Documents pages (2 files)

**`src/app/pages/coach/AthleteDocuments.tsx`**
- Replace empty array with `subscribeToDocuments(athleteId, ...)`
- Replace Upload button alert with `<input type="file">` triggered by button click
- On file select: call `uploadDocument(athleteId, file)`, show loading state
- Add delete button per document
- Display file cards with name, type, size, date

**`src/app/pages/athlete/Documents.tsx`**
- Replace hardcoded mock data with `subscribeToDocuments(user.id, ...)`
- Download button opens `downloadUrl` in new tab
- Remove delete button (coach-only action) or keep if desired

---

## Implementation Order
1. firebase.ts (Storage init) — 1 line change
2. goalService.ts — new file
3. Goals.tsx + AthleteGoals.tsx — wire up goals
4. EditGoal.tsx (both) — wire up save
5. documentService.ts — new file
6. AthleteDocuments.tsx — wire up coach upload/view
7. Documents.tsx — wire up athlete view/download
8. Build verification
