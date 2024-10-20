const quizData = [
  {
    question: "Identify the correct logo of McDonald's",
    imgA: "logo/mcd_og.png",
    imgB: "logo/mcd_fake.jpeg",
    correct: "optionA",
  },
  {
    question: "Identify the correct logo of Pepsi",
    imgA: "logo/pepsi_og.png",
    imgB: "logo/pepsi_fake.jpeg",
    correct: "optionA",
  },
  {
    question: "Identify the correct logo of Nike",
    imgA: "logo/nike_fake.png",
    imgB: "logo/nike_og.png",
    correct: "optionB",
  },
  {
    question: "Identify the correct logo of Tata",
    imgA: "logo/tata_og.png",
    imgB: "logo/tata_fake.png",
    correct: "optionA",
  },
];

let index = 0;
let correct = 0;
const total = quizData.length;
const questionBox = document.getElementById("questionBox");
const imgOptionA = document.getElementById("imgOptionA");
const imgOptionB = document.getElementById("imgOptionB");
const allInputs = document.querySelectorAll("input[type='radio']");

const loadQuestion = () => {
  if (index === total) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `<span class="question">${index + 1}) ${data.question}</span>`;
  imgOptionA.src = data.imgA;
  imgOptionB.src = data.imgB;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  }
  index++;
  loadQuestion();
});

// Function to handle image click
const handleImageClick = (inputId) => {
  document.getElementById(inputId).checked = true;
};

imgOptionA.addEventListener("click", () => handleImageClick("optionA"));
imgOptionB.addEventListener("click", () => handleImageClick("optionB"));

const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.id;
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
          <h3 class="w-100"> Hi, you've scored ${correct} / ${total} </h3>
      </div>
  `;
};

loadQuestion();
