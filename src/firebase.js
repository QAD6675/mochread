import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALUUkJLIYBpLsN0cnFurni_x044DI8pD8",

  authDomain: "mochread.firebaseapp.com",

  projectId: "mochread",

  storageBucket: "mochread.firebasestorage.app",

  messagingSenderId: "630482092582",

  appId: "1:630482092582:web:e4249fa7b0d3048ecc1ce7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

// Auth Operations
export const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("Login successful:", userCredential.user.email);
    return userCredential;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    await signOut(auth);
    console.log("Logout successful");
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

// Projects Collection Operations
export const getProjects = async () => {
  const projectsCollection = collection(db, "projects");
  const snapshot = await getDocs(projectsCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const updateProject = async (id, data) => {
  const projectRef = doc(db, "projects", id);
  await updateDoc(projectRef, data);
};

export const deleteProject = async (id) => {
  const projectRef = doc(db, "projects", id);
  await deleteDoc(projectRef);
};

export const addProject = async (data) => {
  const projectsCollection = collection(db, "projects");
  return await addDoc(projectsCollection, data);
};

// Activities Collection Operations
export const getActivities = async () => {
  const activitiesCollection = collection(db, "activities");
  const snapshot = await getDocs(activitiesCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const updateActivity = async (id, data) => {
  const activityRef = doc(db, "activities", id);
  await updateDoc(activityRef, data);
};

export const deleteActivity = async (id) => {
  const activityRef = doc(db, "activities", id);
  await deleteDoc(activityRef);
};

export const addActivity = async (data) => {
  const activitiesCollection = collection(db, "activities");
  return await addDoc(activitiesCollection, data);
};
