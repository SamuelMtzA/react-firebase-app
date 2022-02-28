// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSBxniUuDG7JDYXTFcnxwlATqU7clzntY",
  authDomain: "react-fb-auth-20f26.firebaseapp.com",
  projectId: "react-fb-auth-20f26",
  storageBucket: "react-fb-auth-20f26.appspot.com",
  messagingSenderId: "960513963979",
  appId: "1:960513963979:web:76fc36abefa35615c3e84e",
  measurementId: "G-KBDE129Z3V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//autenticacion con google
export const auth = getAuth(app);