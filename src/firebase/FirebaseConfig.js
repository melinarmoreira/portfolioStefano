// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD92q0frVputw3Eg5oYaExrfIUUTghrmQ",
    authDomain: "portfolio-stefano.firebaseapp.com",
    projectId: "portfolio-stefano",
    storageBucket: "portfolio-stefano.appspot.com",
    messagingSenderId: "97707495842",
    appId: "1:97707495842:web:3760e55fd2d52f8d03e2fb",
    
    // apiKey: process.env.REACT_APP_PSTEFANO_APIKEY,
    // authDomain: process.env.REACT_APP_PSTEFANO_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PSTEFANO_PROJECTID,
    // storageBucket: process.env.REACT_APP_PSTEFANO_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_PSTEFANO_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_PSTEFANOE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;