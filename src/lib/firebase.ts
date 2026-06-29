import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXAxmprEv9fF-P-1lLpUzykkxG4HjDVI4",
  authDomain: "sonlyhongduc-ca6d6.firebaseapp.com",
  projectId: "sonlyhongduc-ca6d6",
  storageBucket: "sonlyhongduc-ca6d6.firebasestorage.app",
  messagingSenderId: "757658501532",
  appId: "1:757658501532:web:08c87ad6c041e0bc140859",
  measurementId: "G-GXHCCW2KMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics only in browser
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
