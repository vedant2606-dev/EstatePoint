// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatepoint-77927.firebaseapp.com",
  projectId: "estatepoint-77927",
  storageBucket: "estatepoint-77927.firebasestorage.app",
  messagingSenderId: "309091818983",
  appId: "1:309091818983:web:500e5e508794badbba7142"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);