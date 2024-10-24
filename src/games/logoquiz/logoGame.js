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

let quizData = [];
let index = 0;
let correct = 0;
let total = 3; // Number of questions to be asked
const questionBox = document.getElementById("questionBox");
const imgOptionA = document.getElementById("imgOptionA");
const imgOptionB = document.getElementById("imgOptionB");
const allInputs = document.querySelectorAll("input[type='radio']");

const fetchQuestions = async () => {
  const snapshot = await getDocs(collection(db, "logoQuizQuestions"));
  const allQuestions = snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      question: data.question,
      imgA: data.a,
      imgB: data.b,
      answer: data.answer
    };
  });

  quizData = allQuestions.sort(() => 0.5 - Math.random()).slice(0, total);
  console.log("Quiz Data:", quizData);
  loadQuestion();
};

const loadQuestion = () => {
  if (index === total) {
    return;
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `<span class="question">${index + 1}) ${data.question}</span>`;

  const loading = document.getElementById('loading');
  loading.style.display = 'block';

  const imgA = new Image();
  const imgB = new Image();

  imgA.src = convertGstoURL(data.imgA);
  imgB.src = convertGstoURL(data.imgB);

  imgA.onload = imgB.onload = () => {
    imgOptionA.src = imgA.src;
    imgOptionB.src = imgB.src;
    loading.style.display = 'none';
  };
};

const convertGstoURL = (gsPath) => {
  const baseUrl = "https://firebasestorage.googleapis.com/v0/b/ipowerup.appspot.com/o/";
  const encodedPath = encodeURIComponent(gsPath.replace('gs://ipowerup.appspot.com/', ''));
  return `${baseUrl}${encodedPath}?alt=media`;
};

document.querySelector("#submit").addEventListener("click", async function () {
  if (index === total) {
    const email = localStorage.getItem('email');
    await updateUserScore(email, correct);
    quizEnd();
    return;
  }

  const data = quizData[index];
  const ans = getAnswer();

  if (ans === data.answer) {
    correct++;
  }
  index++;
  loadQuestion();
});

const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  document.getElementsByClassName("container")[0].innerHTML = `
      <div class="col">
          <h3 class="w-100"> Your score is ${correct} / ${total} </h3>
      </div>
  `;
};

const fetchUserScore = async (email) => {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    return userDoc.data().logoquiz || 0;
  } else {
    console.log("No such user!");
    return 0;
  }
};

const updateUserScore = async (email, correct) => {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    const userDocRef = doc(db, "users", userDoc.id);
    const totalScore = userDoc.data().totalScore || 0;
    const existingScore = await fetchUserScore(email);
    const newScore = existingScore + correct;
    const newTotalScore = totalScore + correct;

    await updateDoc(userDocRef, {
      logoquiz: newScore,
      totalScore: newTotalScore
    });

    console.log(`Updated score for ${email}: ${newScore}`);
  } else {
    console.log("No user found to update score.");
  }
};

fetchQuestions();
