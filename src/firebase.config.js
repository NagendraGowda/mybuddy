// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpHhlDJK7_7DPl7ANyyjIh6acz_31x7EM",
  authDomain: "mybuddy-fad6e.firebaseapp.com",
  projectId: "mybuddy-fad6e",
  storageBucket: "mybuddy-fad6e.appspot.com",
  messagingSenderId: "621522680623",
  appId: "1:621522680623:web:e00c410802e2947da0ffda",
  measurementId: "G-11M0P90RSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
