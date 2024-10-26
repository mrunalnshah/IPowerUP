import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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
const db = getFirestore(app);


const getUserDetails = async (email) => {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {

        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(db, "users", userDoc.id);

        document.getElementById("username").innerText = userDoc.data().username || "NONE";
        document.getElementById("email").innerText = userDoc.data().email || "NONE";

        // total
        const totalScore = userDoc.data().totalScore || 0;

        // Copyright
        const copyrightCrossword = userDoc.data().crosswordScoreCopyright || 0;
        const copyrightQuiz = userDoc.data().quizScoreCopyright || 0;
        const copyrightWordsearch = userDoc.data().wordsearchScoreCopyright || 0;

        // Trademark
        const trademarkCrossword = userDoc.data().crosswordScoreTrademark || 0;
        const trademarkGuessTheLogo = userDoc.data().logoquiz || 0;
        const trademarkQuiz = userDoc.data().quizScoreTrademark || 0;
        const trademarkWordsearch = userDoc.data().wordsearchScoreTrademark || 0;

        // Trade Secret
        const tradesecretCrossword = userDoc.data().crosswordScoreTradesecret || 0;
        const tradesecretQuiz = userDoc.data().quizScoreTradesecret || 0;
        const tradesecretWordsearch = userDoc.data().wordsearchScoreTradesecret || 0;

        // Patent
        const patentCrossword = userDoc.data().crosswordScorePatent || 0;
        const patentQuiz = userDoc.data().quizScorePatent || 0;
        const patentWordsearch = userDoc.data().wordsearchScorePatent || 0;

        const trademarkTotalScore = trademarkCrossword + trademarkGuessTheLogo + trademarkQuiz + trademarkWordsearch;
        const tradesecretTotalScore = tradesecretCrossword + tradesecretQuiz + tradesecretWordsearch;
        const patentTotalScore = patentCrossword + patentQuiz + patentWordsearch;
        const copyrightTotalScore = copyrightCrossword + copyrightQuiz + copyrightWordsearch;

        document.getElementById("totalScore").textContent = totalScore;

        document.getElementById("totalTrademarkScore").textContent = trademarkTotalScore;
        document.getElementById("trademarkQuiz").textContent = trademarkQuiz;
        document.getElementById("trademarkCrossword").textContent = trademarkCrossword;
        document.getElementById("trademarkWordsearch").textContent = trademarkWordsearch;
        document.getElementById("trademarkGuessTheLogo").textContent = trademarkGuessTheLogo;

        document.getElementById("totalPatentScore").textContent = patentTotalScore;
        document.getElementById("patentQuiz").textContent = patentQuiz;
        document.getElementById("patentCrossword").textContent = patentCrossword;
        document.getElementById("patentWordsearch").textContent = patentWordsearch;

        document.getElementById("totalTradesecretScore").textContent = tradesecretTotalScore;
        document.getElementById("tradesecretQuiz").textContent = tradesecretQuiz;
        document.getElementById("tradesecretCrossword").textContent = tradesecretCrossword;
        document.getElementById("tradesecretWordsearch").textContent = tradesecretWordsearch;

        document.getElementById("totalCopyrightScore").textContent = copyrightTotalScore;
        document.getElementById("copyrightQuiz").textContent = copyrightQuiz;
        document.getElementById("copyrightCrossword").textContent = copyrightCrossword;
        document.getElementById("copyrightWordsearch").textContent = copyrightWordsearch;


    } else {
        console.log("No user found to update score.");
    }
};

const email = localStorage.getItem("email");
getUserDetails(email);