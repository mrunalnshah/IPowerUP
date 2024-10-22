import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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
const db = getFirestore(app);


function clearMessages() {
    document.getElementById('message_in').textContent = '';
    document.getElementById('message_up').textContent = '';
}

// Signup function
document.querySelector('.form.sign-up button').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.form.sign-up input[type="email"]').value;
    const password = document.querySelector('.form.sign-up input[type="password"]').value;
    const username = document.querySelector('.form.sign-up input[type="text"]').value;

    if (email === '' || password === '' || username === '') {
        const errorMessage = "Kindly fill up all the fields...";
        document.getElementById('message_up').textContent = errorMessage;
        document.getElementById('message_up').style.color = 'red';
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        const usersCollection = collection(db, 'users');
        addDoc(usersCollection, {
            userId: user.uid,
            username: username,
            email: email,
            crossword: 0,
            logoquiz: 0,
            quiz: 0,
            wordsearch: 0,
            totalScore: 0,
        })
        .then(() => {
            console.log("User data added to Firestore");
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            window.location.href = '../homepage/homepage.html';
        })
        .catch((error) => {
            console.error("Error adding user data: ", error);
            document.getElementById('message_up').textContent = error.message;
            document.getElementById('message_up').style.color = 'red';
        });
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


    if (email === '' || password === '') {
        const errorMessage = "Email and Password cannot be empty";
        document.getElementById('message_up').textContent = errorMessage;
        document.getElementById('message_up').style.color = 'red';
        return;
    }


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("username", user.username);
            localStorage.setItem("email", user.email);
            window.location.href = '../homepage/homepage.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('message_in').textContent = errorMessage;
            document.getElementById('message_in').style.color = 'red';
        });
});

// Forgot Password
document.querySelector('.form.sign-in p b').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.form.sign-in input[type="email"]').value;

    if (email === '') {
        const errorMessage = "Please enter your email address.";
        document.getElementById('message_in').textContent = errorMessage;
        document.getElementById('message_in').style.color = 'red';
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            const successMessage = "Password reset email sent if email is valid! kindly Check your inbox.";
            document.getElementById('message_in').textContent = successMessage;
            document.getElementById('message_in').style.color = 'green';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('message_in').textContent = errorMessage;
            document.getElementById('message_in').style.color = 'red';
        });
});

