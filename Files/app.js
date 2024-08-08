import { app } from "../FirebaseApp/firebase.mjs";
import { auth } from "../FirebaseApp/firebase.mjs";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let userName = document.getElementById('userName')
let createEmail = document.getElementById('createEmail')
let createPassword = document.getElementById('createPassword')
let signupButton = document.getElementById('signupButton')
let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')
let loginBtn = document.getElementById('loginBtn')

signupButton.addEventListener('click', () => {
    // console.log(userName.value);
    // console.log(createEmail.value);
    // console.log(createPassword.value);
createUserWithEmailAndPassword(auth,createEmail.value, createPassword.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
            title: "Good job!",
            text: "You Sign Up Our Page!",
            icon: "success"
        });
        userName.value = ''
        createEmail.value = ''
        createPassword.value = ''
        // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if (errorCode === 'auth/weak-password') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your Password is too weak",
            footer: '<p>Password Must Be of 6 Characters</p>'
        });
    }
    else if (errorCode === 'auth/email-already-in-use') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This Email Is Already In Use",
            footer: '<p>Type Another Email</p>'
        });
    }
    else if (errorCode === 'auth/invalid-email') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Email is Invalid",
        });
    }
    else if (errorCode === 'auth/missing-password') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Password Is Missing",
        });
    }
    console.log(errorMessage);
    userName.value = ''
    createEmail.value = ''
    createPassword.value = ''
            
    // ..
});
})
loginBtn.addEventListener('click',()=>{
   signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = '../Typing Test Game/index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if (errorCode === 'auth/missing-password') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Password Is Missing",
        });
    }
    else if (errorCode === 'auth/invalid-email') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Email is Invalid",
        });
    }
    else if (errorCode === 'aauth/invalid-credential') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Password is Incorrect",
        });
    }
    loginEmail.value = ''
    loginPassword.value = ''
  });
})
const provider = new GoogleAuthProvider();
let googleLoginBtn = document.getElementById('googleLoginBtn')
googleLoginBtn.addEventListener('click',()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    window.location.href = "../Typing Test Game/index.html"
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})