// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwEARO9i4bYOJiPie740qjXwmTeAiy3tQ",
    authDomain: "chat-app-385d9.firebaseapp.com",
    projectId: "chat-app-385d9",
    storageBucket: "chat-app-385d9.appspot.com",
    messagingSenderId: "785974656714",
    appId: "1:785974656714:web:b4a98a3292d1e8e06d7e33"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const db = getFirestore(Firebase)