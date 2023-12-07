// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDxygaO6D_H1sGkm9C2fZ00mpo4VA1GZH8",
//   authDomain: "buybusy-ad272.firebaseapp.com",
//   projectId: "buybusy-ad272",
//   storageBucket: "buybusy-ad272.appspot.com",
//   messagingSenderId: "260481780408",
//   appId: "1:260481780408:web:ea25419e9b8c23beb4024d"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAqxGJVVG1wjXFubOW5CgAR_6u7KOsrces",
    authDomain: "news-app-c74b4.firebaseapp.com",
    projectId: "news-app-c74b4",
    storageBucket: "news-app-c74b4.appspot.com",
    messagingSenderId: "349340968372",
    appId: "1:349340968372:web:e6e3078dd202866137bee1"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);