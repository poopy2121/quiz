const answerButtons = document.querySelectorAll(".answerBox");
const clapping = new Audio(
  "soundeffects/cheering-and-clapping-crowd-1-5995.mp3"
);
const correctSound = new Audio("soundeffects/correct-6033.mp3");
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

let correctAnswer;
function displayQuestion(index) {
  question.innerText = questions[index].question;
  answerA.innerText = questions[index].options[0];
  answerB.innerText = questions[index].options[1];
  answerC.innerText = questions[index].options[2];
  answerD.innerText = questions[index].options[3];
  correctAnswer = questions[index].answer;
}

let currentIndex = 0;

displayQuestion(currentIndex);

const answerBoxA = document.getElementById("answerBoxA");
const answerBoxB = document.getElementById("answerBoxB");
const answerBoxC = document.getElementById("answerBoxC");
const answerBoxD = document.getElementById("answerBoxD");

// NOTE: There are 3 approaches for handling button clicks:
// 1. Separate listeners for each button (easy but repetitive) not efficient but iam dumb  so ill pick this
// 2. A single event handler function for all buttons (balanced)
// 3. Using querySelectorAll with a loop (efficient but more complex)

let points = 0;

answerBoxA.addEventListener("click", function () {
  if (correctAnswer === answerA.innerText)
    if (correctAnswer === answerA.innerText) {
      console.log("u won!");
      answerBoxA.style.border = "solid green 3px";
      correctSound.play();
      displayQuestion(currentIndex++);
    } else {
      answerBoxA.style.border = "solid red 2px";
    }
});

answerBoxB.addEventListener("click", function () {
  if (correctAnswer === answerB.innerText) {
    console.log("u won!");
    answerBoxB.style.border = "solid green 3px";
    correctSound.play();
    displayQuestion(currentIndex++);
  } else {
    answerBoxB.style.border = "solid red 2px";
  }
});

answerBoxC.addEventListener("click", function () {
  if (correctAnswer === answerC.innerText) {
    console.log("u won!");
    answerBoxC.style.border = "solid green 3px";
    correctSound.play();
    displayQuestion(currentIndex++);
  } else {
    answerBoxC.style.border = "solid red 2px";
  }
});

answerBoxD.addEventListener("click", function () {
  if (correctAnswer === answerD.innerText)
    if (correctAnswer === answerD.innerText) {
      console.log("u won!");
      answerBoxD.style.border = "solid green 3px";
      correctSound.play();
    } else {
      answerBoxD.style.border = "solid red 2px";
    }
});

// const nextQuestionBtn = document.createElement('button');

//function showNextQuestionButton() {
// answerButtons.append(nextQuestionBtn);

// }
