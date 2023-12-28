import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2LGx7X5b5qo3Htc-dXlxlQIZ410M7hlI",
  authDomain: "oy-organize-yourself.firebaseapp.com",
  projectId: "oy-organize-yourself",
  storageBucket: "oy-organize-yourself.appspot.com",
  messagingSenderId: "294747099980",
  appId: "1:294747099980:web:e8d47419075fcc62c935e9",
  measurementId: "G-15JT8R1TLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
