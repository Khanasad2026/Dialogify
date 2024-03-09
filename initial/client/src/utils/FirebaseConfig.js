import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAszuVv-6kdg64-uaVqrpEmJ4vF5Rbk39I",
  authDomain: "dialogify-99093.firebaseapp.com",
  projectId: "dialogify-99093",
  storageBucket: "dialogify-99093.appspot.com",
  messagingSenderId: "765234191312",
  appId: "1:765234191312:web:5b25f238c582db40dbf7d5",
  measurementId: "G-97LWB054FL"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
