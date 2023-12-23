/* eslint-disable */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkj_B51YhpQ6L8WK2zyztvnr8_-CzPoSY",
  authDomain: "safir-4ed2d.firebaseapp.com",
  projectId: "safir-4ed2d",
  storageBucket: "safir-4ed2d.appspot.com",
  messagingSenderId: "113083336386",
  appId: "1:113083336386:web:1fb053c2cc05e79de6dd5b",
  measurementId: "G-PSLDJL59JZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
