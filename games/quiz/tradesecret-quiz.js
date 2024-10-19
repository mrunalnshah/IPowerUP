const quizData = [
  {
    question: "What is a trade secret?",
    a: "A publicly disclosed invention",
    b: "A confidential business asset or information",
    c: "A patented product",
    d: "A registered trademark",
    correct: "b",
  },
  {
    question: "Which of the following is NOT considered a trade secret?",
    a: "Customer lists",
    b: "Employee salaries",
    c: "Manufacturing processes",
    d: "Marketing brochures",
    correct: "b",
  },
  {
    question:
      "Which of the following is a common characteristic of trade secrets?",
    a: "They are publicly disclosed.",
    b: "They have a limited lifespan.",
    c: "They are protected by patents.",
    d: "They provide a competitive advantage.",
    correct: "d",
  },
  {
    question: "Trade secret protection lasts for:",
    a: "10 years",
    b: "As long as it remains secret",
    c: "20 years",
    d: "50 years",
    correct: "b",
  },
  {
    question: "Trade secret protection is typically applicable to:",
    a: "Publicly available information",
    b: "Information that is not valuable",
    c: "Confidential and valuable information",
    d: "Information created by the government",
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
