// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtuoL0c-GToEFT7ffazgWpaip4Y__yH34",
    authDomain: "health-care-app-2ba8c.firebaseapp.com",
    projectId: "health-care-app-2ba8c",
    storageBucket: "health-care-app-2ba8c.appspot.com",
    messagingSenderId: "630312674034",
    appId: "1:630312674034:web:73cb28d53ba883871ae66b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;