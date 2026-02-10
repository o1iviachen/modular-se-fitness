import {
  addDoc, updateDoc, deleteDoc, doc,
  collection, query, orderBy, onSnapshot,
  serverTimestamp, Timestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';

// ---- Type Definitions ----

export interface DocumentDoc {
  name: string;           // original filename
  storagePath: string;    // path in Firebase Storage
  downloadUrl: string;    // public download URL
  size: number;           // bytes
  type: string;           // MIME type
  createdAt: Timestamp;
}

export interface DocumentItem extends DocumentDoc {
  id: string; // Firestore doc ID
}

// ---- Firestore Path Helpers ----

const documentsCollectionRef = (athleteId: string) =>
  collection(db, 'users', athleteId, 'documents');

// ---- Write Operations ----

export async function uploadDocument(
  athleteId: string,
  file: File
): Promise<void> {
  // Create Firestore doc first to get the ID for the storage path
  const docRef = await addDoc(documentsCollectionRef(athleteId), {
    name: file.name,
    storagePath: '', // placeholder, will update
    downloadUrl: '',
    size: file.size,
    type: file.type,
    createdAt: serverTimestamp(),
  });

  try {
    // Upload file to Storage
    const storagePath = `documents/${athleteId}/${docRef.id}/${file.name}`;
    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);

    // Update Firestore doc with storage info
    await updateDoc(docRef, { storagePath, downloadUrl });
  } catch (err) {
    // Clean up the Firestore placeholder if Storage upload failed
    await deleteDoc(docRef).catch(() => {});
    throw err;
  }
}

export async function deleteDocument(
  athleteId: string,
  docId: string,
  storagePath: string
): Promise<void> {
  // Delete from Storage
  if (storagePath) {
    try {
      await deleteObject(ref(storage, storagePath));
    } catch {
      // File may already be deleted, continue with Firestore cleanup
    }
  }

  // Delete from Firestore
  await deleteDoc(doc(db, 'users', athleteId, 'documents', docId));
}

// ---- Read Operations ----

export function subscribeToDocuments(
  athleteId: string,
  callback: (documents: DocumentItem[]) => void
): () => void {
  const q = query(documentsCollectionRef(athleteId), orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snap) => {
    const docs = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as DocumentDoc),
    }));
    callback(docs);
  });
}

// ---- Helpers ----

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
