// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase"
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCieN98dAzY8iE9GwCY6Ms8pxhSwL6axQg",
  authDomain: "foodorderingapp-bae49.firebaseapp.com",
  projectId: "foodorderingapp-bae49",
  storageBucket: "foodorderingapp-bae49.firebasestorage.app",
  messagingSenderId: "659540254606",
  appId: "1:659540254606:web:c7ab9b2f6ad2922d24cedf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

export const db=getDatabase