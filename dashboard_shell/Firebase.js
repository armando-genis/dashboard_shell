// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATAeCWo8_cuXL5kjqUVxp9Dr1etD9eiZE",
    authDomain: "telemetriashell.firebaseapp.com",
    databaseURL: "https://telemetriashell-default-rtdb.firebaseio.com",
    projectId: "telemetriashell",
    storageBucket: "telemetriashell.appspot.com",
    messagingSenderId: "389755693110",
    appId: "1:389755693110:web:f430d47d2a1f8cd1441097",
    measurementId: "G-MNHVYMT298"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)

export const initFirebase = () => {
    return app;
}