import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { emailVerification } from "./emailVerification";
import { auth } from "../firebaseConfig";

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await emailVerification();
    // User successfully registered
    const user = userCredential.user;
    console.log("User registered:", user);
    return user;
  } catch (error) {
    throw error;
  }
};
