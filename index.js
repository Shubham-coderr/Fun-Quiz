const quizData = [
  {
    question:
      "Yubaba is a witch in which animated film written and directed by Hayao Miyazaki?",
    a: "Castle in the Sky",
    b: "Ocean Waves",
    c: "Pom Poko",
    d: "Spirited Away",
    correct: "d",
  },
  {
    question:
      "In Howl's Moving Castle, Sophie is transformed into an old woman by a witch. How old is Sophie as an old woman??",
    a: "75 years old",
    b: "87 years old",
    c: "90 years old",
    d: "101 years old",
    correct: "c",
  },
  {
    question: "What is Light Yagami's secret identity?",
    a: "Ryuk",
    b: "L",
    c: "Kira",
    d: "Soichiro Yagami",
    correct: "c",
  },
  {
    question:
      "An outcast prince takes over the revolution by controlling the mind of others. Who is he?",
    a: "Lelouch Lanperouge",
    b: "Charles zi Britannia",
    c: "V.V.",
    d: "Suzaku Kururugi",
    correct: "a",
  },
  {
    question: "Hayato Date is the director of which mega-hit anime series?",
    a: "Bleach",
    b: "Naruto",
    c: "Slam Dunk",
    d: "Death Note",
    correct: "b",
  },
  {
    question: "What is the longest-running anime series?",
    a: "One Piece",
    b: "Detective Conan",
    c: "Sazae-san",
    d: "Doraemon",
    correct: "c",
  },
  {
    question:
      "What is the Quirk of the Sixth One For All User in My Hero Academia?",
    a: "Smokescreen",
    b: "Float",
    c: "Blackwhip",
    d: "Sperhuman Strength",
    correct: "a",
  },
];

const headingEl = document.getElementsByClassName("heading");
const buttonNext = document.getElementById("next");
const section = document.getElementById("main");
const quizSection = document.getElementById("quiz");
const questionNumber = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const option1TextElement = document.getElementById("Option1");
const option2TextElement = document.getElementById("Option2");
const option3TextElement = document.getElementById("Option3");
const option4TextElement = document.getElementById("Option4");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementsByClassName(".result-text");

quizSection.style.display = "none";

buttonNext.addEventListener("click", () => {
  section.style.display = "none";
  quizSection.style.display = "";
});

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  option1TextElement.innerText = currentQuizData.a;
  option2TextElement.innerText = currentQuizData.b;
  option3TextElement.innerText = currentQuizData.c;
  option4TextElement.innerText = currentQuizData.d;
}

function selectAnswer() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = selectAnswer();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
  }
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2 class="result-text">You answered correctly at <span class="score">${score}/${quizData.length}</span> questions.</h2>
    <button class="reload" onclick="location.reload()">Reload</button>`;
  }
});
