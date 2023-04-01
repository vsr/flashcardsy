// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn553sErnUI_VrZftjI2B8Pkj6l3CjkL8",
  authDomain: "fireblag-0000.firebaseapp.com",
  databaseURL: "https://fireblag-0000.firebaseio.com",
  projectId: "fireblag-0000",
  storageBucket: "fireblag-0000.appspot.com",
  messagingSenderId: "166803512151",
  appId: "1:166803512151:web:3ed635ae5c05dbd35e7c12",
  measurementId: "G-R1C7DYZP58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
