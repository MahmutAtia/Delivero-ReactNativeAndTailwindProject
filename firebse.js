// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ55Zo-5RmcuYY4G-Y0lAGgKhVvYAmLYI",
  authDomain: "delivroo-dcca5.firebaseapp.com",
  projectId: "delivroo-dcca5",
  storageBucket: "delivroo-dcca5.appspot.com",
  messagingSenderId: "993554810403",
  appId: "1:993554810403:web:ebfac481a69656d3f89396"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();





export {db}