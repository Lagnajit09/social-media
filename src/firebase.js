import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADlKNCHnbYCuGKs73D6ENbToV2Kfk96UE",
  authDomain: "ls-book.firebaseapp.com",
  projectId: "ls-book",
  storageBucket: "ls-book.appspot.com",
  messagingSenderId: "883649431057",
  appId: "1:883649431057:web:f9c0b44534a5be1f6fd3b0",
  measurementId: "G-J3Y0L19Q62",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
