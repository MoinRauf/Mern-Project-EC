// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "firebase/auth"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3lMt2wfO77mDqZuFBLlWYs7op3vp1zsg",
  authDomain: "user-authentication-37290.firebaseapp.com",
  projectId: "user-authentication-37290",
  storageBucket: "user-authentication-37290.appspot.com",
  messagingSenderId: "1039952396925",
  appId: "1:1039952396925:web:56bc7c939ca3387a3fe714",
  measurementId: "G-RWQ2TX1NQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const database=getAuth(app)
export const auth = getAuth(app);


// Initialize Firestore from Firebase
const db = getFirestore(app);

// Export the necessary Firebase modules
export { app as firebase, db };



