// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4w1aSz1guNsnBTeIM5Uro4IpAGOaGXGw",
    authDomain: "cats-acd36.firebaseapp.com",
    projectId: "cats-acd36",
    storageBucket: "cats-acd36.appspot.com",
    messagingSenderId: "710400795583",
    appId: "1:710400795583:web:87e26b5283d69679e5f70a",
    measurementId: "G-GEF0VPY049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);