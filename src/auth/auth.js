import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2fy_gS6IXKMfUeEf_4nydw_UAckDfnMA",
    authDomain: "ipowerup.firebaseapp.com",
    projectId: "ipowerup",
    storageBucket: "ipowerup.appspot.com",
    messagingSenderId: "241303702736",
    appId: "1:241303702736:web:ecb72af2c1b384682d22d5",
    measurementId: "G-PC9W080KB0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


function clearMessages() {
    document.getElementById('message_in').textContent = '';
    document.getElementById('message_up').textContent = '';
}

// Signup function
document.querySelector('.form.sign-up button').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.form.sign-up input[type="email"]').value;
    const password = document.querySelector('.form.sign-up input[type="password"]').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = '../homepage/homepage.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('message_up').textContent = errorMessage;
            document.getElementById('message_up').style.color = 'red';
        });
});

// Login function
document.querySelector('.form.sign-in button').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.form.sign-in input[type="email"]').value;
    const password = document.querySelector('.form.sign-in input[type="password"]').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = '../homepage/homepage.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('message_in').textContent = errorMessage;
            document.getElementById('message_in').style.color = 'red';
        });
});
