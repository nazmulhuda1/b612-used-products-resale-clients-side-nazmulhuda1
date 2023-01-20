// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    // apiKey: "AIzaSyCsPK5AUM8bs3iK3EhQdaVX8dTgaqiQLtQ",
    // authDomain: "resalecars-d28a7.firebaseapp.com",
    // projectId: "resalecars-d28a7",
    // storageBucket: "resalecars-d28a7.appspot.com",
    // messagingSenderId: "317941939046",
    // appId: "1:317941939046:web:e826cd8ada95e20dd566a7"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;