// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU8RhaKRLrgjVaJj4MolSnki0wFU5CU4g",
    authDomain: "genius-car-services-ff8e5.firebaseapp.com",
    projectId: "genius-car-services-ff8e5",
    storageBucket: "genius-car-services-ff8e5.appspot.com",
    messagingSenderId: "786411733971",
    appId: "1:786411733971:web:3c6fbc27404f400d18a526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;