const answerButtons = document.querySelectorAll(".answerBox");
const clapping = new Audio(
  "soundeffects/cheering-and-clapping-crowd-1-5995.mp3");
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
}
displayQuestion(0);

// const nextQuestionBtn = document.createElement('button');

//function showNextQuestionButton() {
// answerButtons.append(nextQuestionBtn);

// }
