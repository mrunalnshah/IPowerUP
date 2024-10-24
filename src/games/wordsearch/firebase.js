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

window.updateUserScore = async (email, score, gameType) => {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    let wordSearchType;
    if (gameType == 0){
        wordSearchType = 'wordsearchScoreCopyright';
    }else if(gameType == 1){
        wordSearchType = 'wordsearchScorePatent';
    }else if(gameType == 2){
        wordSearchType = 'wordsearchScoreTrademark';
    }else if(gameType == 3){
        wordSearchType = 'wordsearchScoreTradesecret';
    }else {
        wordSearchType = 'wordsearchScoreCopyright';
    }

    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(db, "users", userDoc.id);
        const totalScore = userDoc.data().totalScore || 0;
        const existingScore = userDoc.data()[wordSearchType] || 0;
        const newScore = existingScore + score;
        const newTotalScore = totalScore + score;

        await updateDoc(userDocRef, {
            [wordSearchType]: newScore,
            totalScore : newTotalScore
        });

        console.log(`Updated score for ${email}: ${newScore}`);
        localStorage.setItem("wordSearchScore", 0);
    } else {
        console.log("No user found to update score.");
    }
};
