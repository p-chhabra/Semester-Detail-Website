// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD33gtFEABO4C2tfk6Z_Ta9uk7MjFDfgQA",
  authDomain: "semdetailapp.firebaseapp.com",
  projectId: "semdetailapp",
  storageBucket: "semdetailapp.appspot.com",
  messagingSenderId: "1067601492898",
  appId: "1:1067601492898:web:8f16f6b0f9d876b73790fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
