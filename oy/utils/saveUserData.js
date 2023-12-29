import { FIREBASE_AUTH } from "../firebaseConfig";
import { FIREBASE_DB, database } from "../firebaseConfig";
import { set, ref } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";

export const saveUserData = async (name, id) => {
  const user = FIREBASE_AUTH.currentUser;
  try {
    const docRef = addDoc(collection(FIREBASE_DB, "/users/$uid"), {
      name: name,
      id: id,
      email: user.email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
