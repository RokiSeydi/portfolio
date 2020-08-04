import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp = {
    apiKey: "AIzaSyD-B3lVuKCFYlG3tuBeEK5vPAR_apNJiOQ",
    authDomain: "portfolio-e030e.firebaseapp.com",
    databaseURL: "https://portfolio-e030e.firebaseio.com",
    projectId: "portfolio-e030e",
    storageBucket: "portfolio-e030e.appspot.com",
    messagingSenderId: "561753896402",
    appId: "1:561753896402:web:54489b0185f9814009040b",
    measurementId: "G-MKXWYC8YG0"
};

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;