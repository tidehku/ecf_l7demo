import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFP_btezpcvBybXV8LtXu6bV-B7DMd-Cs",
  authDomain: "hkrise-727ac.firebaseapp.com",
  projectId: "hkrise-727ac",
  storageBucket: "hkrise-727ac.appspot.com",
  messagingSenderId: "531698481685",
  appId: "1:531698481685:web:924c74363be106b4b36c1c",
  measurementId: "G-HM84FMYZFW"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
// let firebaseAuth = firebaseApp.auth();
let firebaseStore = firebaseApp.firestore();

// export { firebaseAuth, firebaseStore };
export { firebaseStore };
