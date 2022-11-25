// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
const firebaseConfig = {
  apiKey: "AIzaSyCerNGsfyOfPJSX3msETB2nNFxYVqxceLQ",
  authDomain: "twitter-clone-e3d78.firebaseapp.com",
  projectId: "twitter-clone-e3d78",
  storageBucket: "twitter-clone-e3d78.appspot.com",
  messagingSenderId: "661129471649",
  appId: "1:661129471649:web:5182dc5ffd47902c2772e0",
  measurementId: "G-SVWM6LY6TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
export default db;
