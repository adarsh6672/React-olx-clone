// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCNVn5SeXeneVKAsaWUljfoJO8Ff7gxcU",
  authDomain: "olx-clone-a8458.firebaseapp.com",
  projectId: "olx-clone-a8458",
  storageBucket: "olx-clone-a8458.appspot.com",
  messagingSenderId: "1060966098719",
  appId: "1:1060966098719:web:6037b62990783bd6bff22a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)
export const storage = getStorage(app)