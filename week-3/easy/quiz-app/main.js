import { quizData } from "./data.js";

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("startQuiz").addEventListener("click", startQuiz);

function startQuiz() {
  document.getElementById("startQuiz").style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  const quizContainer = document.querySelector(".quizQues");
  quizContainer.innerHTML = "";

  if (currentQuestionIndex < quizData.length) {
    const questionData = quizData[currentQuestionIndex];
    const questionElement = quizComponent(questionData);
    quizContainer.appendChild(questionElement);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("class", "submitButton");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", checkAnswer);
    quizContainer.appendChild(submitButton);
  } else {
    showScore();
  }
}

function quizComponent(questionData) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");

  h3.innerHTML = questionData.question;
  div.appendChild(h3);

  const answers = [
    questionData.a,
    questionData.b,
    questionData.c,
    questionData.d,
  ];
  answers.forEach((answer, index) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    label.classList.add("answer-label");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "answer");
    radio.setAttribute("value", String.fromCharCode(97 + index));
    label.appendChild(radio);
    label.append(answer);
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  return div;
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    if (answerValue === quizData[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    renderQuestion();
  } else {
    alert("Please select an answer before submitting.");
  }
}

function showScore() {
  const quizContainer = document.querySelector(".quizQues");
  quizContainer.innerHTML = `<h3>Your score is ${score} out of ${quizData.length}</h3>`;
}
