
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoknXzjTvqiMZwlQIyLB7bAo7q5-oYtfg",
    authDomain: "javascript-projects-418a1.firebaseapp.com",
    projectId: "javascript-projects-418a1",
    storageBucket: "javascript-projects-418a1.appspot.com",
    messagingSenderId: "706290212672",
    appId: "1:706290212672:web:0f1adbfbc8b7d0a18f24a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log('app', app);
console.log('auth', auth);

