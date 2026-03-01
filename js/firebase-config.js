// Import Firebase from CDN (NOT npm)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Paste YOUR config here
const firebaseConfig = {
  apiKey: "AIzaSyA5VC6R9cnIdiOZEXiQ8sDLwD3cBI1rP2M",
  authDomain: "rotl28.firebaseapp.com",
  projectId: "rotl28",
  storageBucket: "rotl28.firebasestorage.app",
  messagingSenderId: "764363126744",
  appId: "1:764363126744:web:4f694298f69b9408b1a4ad",
  measurementId: "G-YVVDRDVPK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);