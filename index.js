var readlineSync = require('readline-sync')

var score = 0;
console.log("Welcome to a Quiz on Sports!!!")

var topScores = [{
  name: "Raj",
  score: 4
}, {
  name: "Tejas",
  score: 3
}, {
  name: "Shreya",
  score: 2
}]

var questionnaire = [{
  question: "Which is India's national Sport? ",
  answer: "Hockey"
}, {
  question: "Who is the current captain of Indian Cricket Team in T20 Format? ",
  answer: "Virat Kohli"
}, {
  question: "How won a gold medal for India in Olympics 2021 in Javelin Throw? ",
  answer: "Neeraj Chopra"
}, {
  question: "Who is the current captain of Indian Football Team? ",
  answer: "Sunil Chhetri"
}, {
  question: "The Sport Kabaddi originated in which state? ",
  answer: "Tamil Nadu"
}]

function play(question, answer) {

  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right! ");
    score++;
  }
  else {
    console.log("Wrong! ");
  }
  console.log("Current Score: " + score);
  console.log("--------------------------")
}

function game() {
  for (var i = 0; i < questionnaire.length; i++) {
    var currentquestion = questionnaire[i];
    play(currentquestion.question, currentquestion.answer);
  }
}

function topScoreslist() {
  for (var i = 0; i < topScores.length; i++) {
    console.log(topScores[i].name + " " + topScores[i].score)
  }
}

function finalscore() {
  console.log("Your Final Score is: " + score + "/" + questionnaire.length);
  console.log("Check out the top scores, if you beat them , ping me , I will update it")
}

function welcomeUser() {
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName);
  console.log("Do you have what is takes to be the at the Top!")
  console.log("Lets Begin")
}

welcomeUser();
game();
finalscore();
topScoreslist();
