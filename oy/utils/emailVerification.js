import { sendEmailVerification } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";

export const emailVerification = async () => {
  sendEmailVerification(FIREBASE_AUTH.currentUser).then(() => {
    // Email verification sent!
    alert("Email Verification sent! Check your mail box");
    // ...
  });
};
