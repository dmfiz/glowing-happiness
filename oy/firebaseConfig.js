import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2LGx7X5b5qo3Htc-dXlxlQIZ410M7hlI",
  authDomain: "oy-organize-yourself.firebaseapp.com",
  projectId: "oy-organize-yourself",
  storageBucket: "oy-organize-yourself.appspot.com",
  messagingSenderId: "294747099980",
  appId: "1:294747099980:web:e8d47419075fcc62c935e9",
  measurementId: "G-15JT8R1TLP",
  databaseURL:
    "https://oy-organize-yourself-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const database = getDatabase(FIREBASE_APP);
