// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu6m1AEJim1ULotO7vY9CCdy-k4xoE7Gs",
  authDomain: "react-recipe-e2bc3.firebaseapp.com",
  projectId: "react-recipe-e2bc3",
  storageBucket: "react-recipe-e2bc3.appspot.com",
  messagingSenderId: "580357324296",
  appId: "1:580357324296:web:6f890b9aba32357d845bbd",
  measurementId: "G-87NM0SQT13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
