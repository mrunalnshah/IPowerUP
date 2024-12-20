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

    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(db, "users", userDoc.id);
        const totalScore = userDoc.data().totalScore || 0;

        let scoreType;
        if(gameType == 0){
            scoreType = 'crosswordScoreTrademark';
        }else if(gameType == 1){
            scoreType = 'crosswordScoreCopyright';
        }else if(gameType == 2){
            scoreType = 'crosswordScorePatent';
        }else if(gameType == 3){
            scoreType = 'crosswordScoreTradesecret';
        }else {
            scoreType = 'crosswordScoreTrademark';
        }

        const existingScore = userDoc.data()[scoreType] || 0;
        const newScore = existingScore + score;
        const newTotalScore = totalScore + score;

        await updateDoc(userDocRef, {
            [scoreType]: newScore,
            totalScore: newTotalScore
        });

        console.log(`Updated score for ${email}: ${newScore}`);
    } else {
        console.log("No user found to update score.");
    }
};
