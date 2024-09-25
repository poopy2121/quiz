const answerButtons = document.querySelectorAll(".answerBox");

const questions = [
  {
    question: "What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Kangaroo", "Lion"],
    answer: "Giraffe",
  },
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
];

let question = document.getElementById('questionContainer');
let answerA = document.getElementById('SpanA');
let answerB = document.getElementById("SpanB");
let answerC = document.getElementById("SpanC");
let answerD = document.getElementById("SpanD");







function displayQuestion(index) {
       question.innerText = questions[index].question;
       answerA.innerText = questions[index].options[0];
       answerB.innerText = questions[index].options[1];
       answerC.innerText = questions[index].options[2];
       answerD.innerText = questions[index].options[3];

  
}

displayQuestion()