const quizData = [
  {
    question: "What is a trademark?",
    a: "A type of copyright",
    b: "A sign used to identify goods or services",
    c: "A patent for a new invention",
    d: "A trade secret",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a common type of trademark?",
    a: "Word mark",
    b: "Logo mark",
    c: "Sound mark",
    d: "Patent mark",
    correct: "d",
  },
  {
    question: "What is the primary purpose of a trademark?",
    a: "To prevent others from using similar names or logos",
    b: "To keep product prices low",
    c: "To encourage competition",
    d: "To protect trade secrets",
    correct: "a",
  },
  {
    question:
      "How long does trademark protection typically last in many countries?",
    a: "5 years",
    b: "As long as it's actively used",
    c: "20 years",
    d: "10 years",
    correct: "d",
  },
  {
    question:
      "Which of the following is a potential consequence of trademark infringement?",
    a: "Reduced brand recognition",
    b: "Increased customer trust",
    c: "Lower sales",
    d: "Enhanced reputation",
    correct: "c",
  },
];

let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  if (index === Number(quizData.length - 1)) {
    document.querySelector("#submit").textContent = "Submit";
  }
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
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
      <div class="col">
          <h3 class="w-100"> Your score is ${correct} / ${total} </h3>
      </div>
  `;
};
loadQuestion(index);
