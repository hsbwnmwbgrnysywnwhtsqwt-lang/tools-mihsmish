import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoKpo_Xz_PwTnBY6E1wgZ0w0CBC-4p3fc",
  authDomain: "deductive-star-476216-c2.firebaseapp.com",
  projectId: "deductive-star-476216-c2",
  storageBucket: "deductive-star-476216-c2.firebasestorage.app",
  messagingSenderId: "670821139728",
  appId: "1:670821139728:web:0a026d2c718740c5f21195",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function loadProjectById(id) {
  try {
    const snap = await getDoc(doc(db, "projects", id));
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  } catch (e) {
    console.error("Firebase error:", e);
    return null;
  }
}

export async function loadProjects() {
  try {
    const snapshot = await getDocs(collection(db, "projects"));
    const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return projects
      .filter(p => p.status !== "draft")
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  } catch (e) {
    console.error("Firebase error:", e);
    return [];
  }
}
