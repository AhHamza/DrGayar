

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDNEzpb1McPqMhYc4CRVlMJJjJKAfrZP4",
  authDomain: "myfirst303.firebaseapp.com",
  databaseURL: "https://myfirst303-default-rtdb.firebaseio.com",
  projectId: "myfirst303",
  storageBucket: "myfirst303.appspot.com",
  messagingSenderId: "613772915855",
  appId: "1:613772915855:web:6713714cb3390a64e9ecfa",
  measurementId: "G-FMERZNCEC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const analytics = getAnalytics(app);

export { app, db, auth };

