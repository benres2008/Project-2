// GATHERING HTML ELEMENTS AND MAKING THEM TO VARIABLES

// Q&A
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var questionsElement = document.getElementById("questions");

// HOME PAGE ELEMENTS
var startQuizBtn = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("homepage");
var highscoreDiv = document.getElementById("high-scorePage");
var quizMain = document.getElementById("quiz");

// TIMER
var quizTimer = document.getElementById("timer");

// HIGHSCORE
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreContainer = document.getElementById("highscoreContainer");

// END GAME
var resultsEl = document.getElementById("result");
var finalScoreElement = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var endGameBtns = document.getElementById("endGameBtns");



// QUIZ QUESTIONS
var quizQuestions = [{
    question: "Do you want an eddible or an ineddible?",
    answerA: "Eddible",
    answerB: "Innideble",
   },
   {
    question: "?",
    answerA: "",
    answerB: "",
   },

   
        
    
    ];
// OTHER VARIABLES
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsElement.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.answerA;
    buttonB.innerHTML = currentQuestion.answerB;
  
};

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

};

// START QUIZ BTN
startQuizBtn.addEventListener("click",startQuiz);