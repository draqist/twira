// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQDNLhZ3LDQbU5O8O3lIGbhc6PXn_Ql0k",
  authDomain: "twirra-io.firebaseapp.com",
  projectId: "twirra-io",
  storageBucket: "twirra-io.appspot.com",
  messagingSenderId: "149337134974",
  appId: "1:149337134974:web:3f228d9610c838958a452f",
  measurementId: "G-EET66XL91D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)