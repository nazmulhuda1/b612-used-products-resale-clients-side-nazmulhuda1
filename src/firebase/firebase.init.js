import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCsPK5AUM8bs3iK3EhQdaVX8dTgaqiQLtQ",
    authDomain: "resalecars-d28a7.firebaseapp.com",
    projectId: "resalecars-d28a7",
    storageBucket: "resalecars-d28a7.appspot.com",
    messagingSenderId: "317941939046",
    appId: "1:317941939046:web:e826cd8ada95e20dd566a7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;