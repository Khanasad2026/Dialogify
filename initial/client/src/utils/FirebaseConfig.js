import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9L0geZC_BcIeHp9XA4VbNWBGqLanFaZo",
    authDomain: "dialogify-1b956.firebaseapp.com",
    projectId: "dialogify-1b956",
    storageBucket: "dialogify-1b956.appspot.com",
    messagingSenderId: "411382106714",
    appId: "1:411382106714:web:5b1efec40da87deca96663",
    measurementId: "G-0WQX1WMXN6"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);