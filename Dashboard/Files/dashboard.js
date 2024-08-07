let logoutBtn = document.getElementById('logoutBtn')
import { app } from "../../FirebaseApp/firebase.mjs"
import { auth } from "../../FirebaseApp/firebase.mjs"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
logoutBtn.addEventListener('click', () => {
    // console.log(true);
    signOut(auth).then(() => {
        // Sign-out successful
        console.log('Sign-out successful');
        window.location.href = '../../index.html'
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
        
    });
})
