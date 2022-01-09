import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8tt69ZUiWlRpSSdiN3KFtYhf_KmHZcrE",
  authDomain: "twira-io.firebaseapp.com",
  projectId: "twira-io",
  storageBucket: "twira-io.appspot.com",
  messagingSenderId: "12894996243",
  appId: "1:12894996243:web:81a5c5ba6d21c9e6d37ce6",
  measurementId: "G-0WT9LHDHQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);