// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpbdPQXR0QpGwUD58oitsEBmWpZYvqxo",
  authDomain: "it-management-service.firebaseapp.com",
  projectId: "it-management-service",
  storageBucket: "it-management-service.appspot.com",
  messagingSenderId: "518514261471",
  appId: "1:518514261471:web:0e5e761ad769ed7150d86a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;