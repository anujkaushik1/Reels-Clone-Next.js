// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage, ref, uploadString } from "firebase/storage";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpFMOuiUiE7JdpuMOwer2MJxI6o1tKtrI",
  authDomain: "reels-clone-nextjs-24142.firebaseapp.com",
  projectId: "reels-clone-nextjs-24142",
  storageBucket: "reels-clone-nextjs-24142.appspot.com",
  messagingSenderId: "646448706018",
  appId: "1:646448706018:web:be17a1c4186438d479c9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


export default app;