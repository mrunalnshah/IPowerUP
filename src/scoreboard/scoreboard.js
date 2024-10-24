import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, getDocs, orderBy, query, limit } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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

async function fetchLeaderboard(game, tableBodyId) {
    const playersRef = collection(db, 'users');
    const q = query(playersRef, orderBy(game, 'desc'), limit(5));
    const querySnapshot = await getDocs(q);

    const players = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        players.push({ username: data.username, points: data[game] });
    });

    populateLeaderboard(players, tableBodyId);
}

function populateLeaderboard(players, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = '';

    players.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.username}</td>
            <td>${player.points}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchLeaderboard('totalScore', 'overall');
fetchLeaderboard('logoquiz', 'logo-trademark');
fetchLeaderboard('quizScoreCopyright', 'quizCopyright');
fetchLeaderboard('quizScorePatent', 'quizPatent');
fetchLeaderboard('quizScoreTrademark', 'quizTrademark');
fetchLeaderboard('quizScoreTradesecret', 'quizTradesecret');
fetchLeaderboard('wordsearchScoreCopyright', 'wordsearchCopyright');
fetchLeaderboard('wordsearchScorePatent', 'wordsearchPatent');
fetchLeaderboard('wordsearchScoreTrademark', 'wordsearchTrademark');
fetchLeaderboard('wordsearchScoreTradesecret', 'wordsearchTradesecret');
fetchLeaderboard('crosswordScoreCopyright', 'crosswordCopyright');
fetchLeaderboard('crosswordScorePatent', 'crosswordPatent');
fetchLeaderboard('crosswordScoreTrademark', 'crosswordTrademark');
fetchLeaderboard('crosswordScoreTradesecret', 'crosswordTradesecret');
