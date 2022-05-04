import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_APP_PROJECT_ID, REACT_APP_FIREBASE_MESSAGE_SENDER_ID, REACT_APP_FIREBASE_APP_ID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: `${REACT_APP_FIREBASE_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: REACT_APP_FIREBASE_APP_PROJECT_ID,
  storageBucket: `${REACT_APP_FIREBASE_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
