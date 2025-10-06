// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAAGZ_ajxETsFFyox-mtbAhwu6FsGeC22E",
  authDomain: "skill-navigator-7096.firebaseapp.com",
  projectId: "skill-navigator-7096",
  storageBucket: "skill-navigator-7096.firebasestorage.app",
  messagingSenderId: "732968618404",
  appId: "1:732968618404:web:325d8fb5bbc7659962d931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Register new user
export async function register(email, password, fullName) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, "users", user.uid), {
    email: email,
    fullName: fullName
  });
  return userCredential;
}

// Login user
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

