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


function firstQuestion() {
  
  question.innerText = questions[0].question;
answerA.innerText = questions[0].options[0]
answerB.innerText = questions[0].options[1]
answerC.innerText = questions[0].options[2]
answerD.innerText = questions[0].options[3]

  
}

function secondQuestion() {
    question.innerText = questions[1].question;
    answerA.innerText = questions[1].options[0];
    answerB.innerText = questions[1].options[1];
    answerC.innerText = questions[1].options[2];
    answerD.innerText = questions[1].options[3];
  
}


function thirdQuestion() {
     question.innerText = questions[2].question;
     answerA.innerText = questions[2].options[0];
     answerB.innerText = questions[2].options[1];
     answerC.innerText = questions[2].options[2];
     answerD.innerText = questions[2].options[3];

  
}


firstQuestion();


function displayQuestion(index) {
       question.innerText = questions[index].question;
       answerA.innerText = questions[index].options[0];
       answerB.innerText = questions[index].options[1];
       answerC.innerText = questions[index].options[2];
       answerD.innerText = questions[index].options[3];

  
}