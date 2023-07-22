// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5FWinbDLQawnrxd9A3zoI_TfrK-Q_UBM",
  authDomain: "college-bookings.firebaseapp.com",
  projectId: "college-bookings",
  storageBucket: "college-bookings.appspot.com",
  messagingSenderId: "245663530462",
  appId: "1:245663530462:web:4142cdbcbb7462a216f14f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);