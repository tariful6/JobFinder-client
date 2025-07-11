// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZmy95EXy0C0xiwd8QmMEZoQbruZ_r_U",
  authDomain: "solosphere-99ed6.firebaseapp.com",
  projectId: "solosphere-99ed6",
  storageBucket: "solosphere-99ed6.firebasestorage.app",
  messagingSenderId: "122201108417",
  appId: "1:122201108417:web:ae46b96f5b9007413f8940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;