import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


//The values are not same as I used in the app for security purposes.
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADlKNCHnbYCuGKs73D6ENbToV2Kfk96UZZ",
  authDomain: "socialmedia.firebaseapp.com",
  projectId: "socialmedia",
  storageBucket: "socialmedia.appspot.com",
  messagingSenderId: "883649431099",
  appId: "1:813649420057:web:f9c0b44534a5be1f6fkn8s",
  measurementId: "G-J3Y0L1KS879",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
