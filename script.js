const clapping = new Audio(
  "soundeffects/cheering-and-clapping-crowd-1-5995.mp3"
);
const correctSound = new Audio("soundeffects/correct-6033.mp3");

const error = new Audio("soundeffects/error-126627.mp3");

const questions = [
  {
    question:
      "On which planet can you find Olympus Mons, the largest volcano in the solar system?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question:
      "What is the name of the oldest known animal to ever live, a clam that lived to be 507 years old?",
    options: [
      "Tortoise Timmy",
      "Ming the Clam",
      "Methuselah the Whale",
      "Henry the Lobster",
    ],
    answer: "Ming the Clam",
  },
  {
    question: "What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Kangaroo", "Lion"],
    answer: "Giraffe",
  },
];

let question = document.getElementById("questionContainer");
let answerA = document.getElementById("SpanA");
let answerB = document.getElementById("SpanB");
let answerC = document.getElementById("SpanC");
let answerD = document.getElementById("SpanD");

const answerBoxes = document.querySelectorAll(".answerBox");
let correctAnswer;
let currentIndex = 0;
let points = 0;
let attempts = 0;
const pointspan = document.getElementById("pointsspan");

function displayQuestion(index) {
  resetStyles();
  question.innerText = questions[index].question;
  answerA.innerText = questions[index].options[0];
  answerB.innerText = questions[index].options[1];
  answerC.innerText = questions[index].options[2];
  answerD.innerText = questions[index].options[3];
  correctAnswer = questions[index].answer;
}

function resetStyles() {
  answerBoxes.forEach((box) => {
    box.style.border = "";
  });
}

function updatePoints() {
  pointspan.innerText = points;
}

function nextQuestion() {
  //TODO HIER PROGRESS BAR AKTUALISIEREN
  currentIndex++;
  attempts = 0;
  if (currentIndex < questions.length) {
    displayQuestion(currentIndex);
  } else {
    alert("Quiz completed! Your score:" + points );
    leaderboardAdd();
  }
}

const body = document.body
const leaderboard = document.getElementById("leaderboard");

answerBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    const selectedAnswer = this.querySelector("span").innerText;
    attempts++;
    if (selectedAnswer === correctAnswer) {
      this.style.border = "solid green 3px";
      correctSound.play();
      if (attempts === 1) points += 500;
      else if (attempts === 2) points += 100;
      else if (attempts >= 3) points += 10;
      updatePoints();
      setTimeout(nextQuestion, 800);
    } else {
      this.style.border = "solid red 2px";
      error.play();

      if (attempts >= 3) {
        setTimeout(nextQuestion, 800);
      }
    }
  });
});


displayQuestion(currentIndex);
updatePoints();


//TODO Leaderboard erstellen

function leaderboardAdd() {
  const lastScore = document.createElement('li');
  lastScore.innerText = points;
  leaderboard.append(lastScore);
  
}

