var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-btn')
var answerA_El = document.getElementById("answerA")
var answerB_El = document.getElementById("answerB")
var answerC_El = document.getElementById("answerC")
var answerD_El = document.getElementById("answerD")
var timerElement = document.querySelector('#timer')
var currentQuestion;
var highscoreElement = document.getElementById('Highscore')
var time = 50
var timer; 
// var endGame = document.querySelector(".reset-button")
var resetButton = document.getElementById('reset-btn')


let shufftledQuestions, currentQuestionIndex
currentQuestionIndex = 0


startButton.addEventListener("click", startGame)

// start button must enable questions to show + timer to start 
function startGame() {
    // console.log('Play')
    
    timerElement.textContent = time
    showQuestion()
    startTimer()
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')


}



function showQuestion() {
    shufftledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = shufftledQuestions[currentQuestionIndex]
    questionElement.innerText = currentQuestion.question
    //question.answers.forEach(answer => {
        // var newEl = document.createElement("button")
        // newEl.textContent = question.answer[i]
        // newEl.setAttribute("value", question.answer)
   // })
   answerA_El.innerText = currentQuestion.a 
   answerB_El.innerText = currentQuestion.b
   answerC_El.innerText = currentQuestion.c
   answerD_El.innerText = currentQuestion.d

//    answerA_El.setAttribute('value', currentQuestion.a) 
//    answerB_El.setAttribute('value', currentQuestion.b)
//    answerC_El.setAttribute('value', currentQuestion.c)
//    answerD_El.setAttribute('value', currentQuestion.d)

   answerA_El.addEventListener('click' , pickAnswer )
   answerB_El.addEventListener('click' , pickAnswer )
   answerC_El.addEventListener('click' , pickAnswer )
   answerD_El.addEventListener('click' , pickAnswer )
}

function pickAnswer() {
    console.log(this.getAttribute("data-letter"))
    console.log(currentQuestion.correctAnswer)
    if(this.getAttribute("data-letter") === currentQuestion.correctAnswer) {
      
      
        time +=1;
        if(time <= 0 ) {
        }
       
   } 
   
   else {
    time -=10;
   } 
   

   timerElement.textContent = time
   currentQuestionIndex++;
   if(currentQuestionIndex>=questions.length) {
       endGame()
   }
   
   else{
       showQuestion()
   }
}
// DOESN'T WORK 
function endGame() {
    clearInterval(timer)
    startButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    highscoreElement.classList.remove('hide')
    timerElement.classList.add('hide')

}
resetButton.addEventListener("click", startGame)


// Questions array 
var questions = [
    {
        question: "what is the definition of HTML?",

        // answers: ["a", "b", "c"]
            a: "HyperText Markup Language",
            b: "Hulu TV Must Love",
            c: "Styles Sheet",
            d: "Hungry Tall Monkey List",
        correctAnswer: "a", 
    },

    {
        question: "What language is generally used to decorate a webpage?",
           a: "HTML", 
           b: "CSS", 
           c: "Javascript", 
           d: "Python", 
        correctAnswer: "b",
    },

    {
        question: "How can you change directories within a terminal?",
           a: "mkdir",
           b: "/..",
           c: "ls",
           d: "cd ..",
        correctAnswer: "d",
    },

    {
        question: "What special variable is used to store more than one value?",
           a: "var",
           b: "let",
           c: "array",
           d: "None of the above",
        correctAnswer: "c",

    },

    {
        question: "What's the proper way to establish a background color using CSS?",
           a: "color:",
           b: "background-color:",
           c: "margin:",
           d: "padding:",
        correctAnswer: "b",

    },
];

var userAnswerA = document.querySelector("answerA");
var userAnswerB = document.querySelector("answerB");
var userAnswerC = document.querySelector("answerC");
var userAnswerD = document.querySelector("answerD");




function startTimer() {
    timer = setInterval(function () {
      time--;
      timerElement.textContent = time;
      if (time === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }



// var resetButton = document.querySelector(".reset-button")

// function restartGame(){
//  timer = 0;
// }

// resetButton.addEventListener("click", restartGame)



//   }









// {
//         question: "What is the definition of HTML?"
//         answers: [
//             { text: 'HyperText Markup Lanague', correct: true},
//             { text: 'Style Sheets', correct: false},
//             { text: 'Website', correct: false},
//             { text: 'Houo Text Marker Language', correct: false}
//         ]
//     }
// ]
    


// var score = 0

// var timer;



// var start = document.getElementsByClassName("start");
// var questionDisplay = document.querySelector(".newQuestion");

// // var userAnswer =

// var userAnswerA = document.querySelector("#answerA");
// var userAnswerB = document.querySelector("#answerB");
// var userAnswerC = document.querySelector("#answerC");
// var userAnswerD = document.querySelector("#answerD");
// var userAnswer = []
// var timerElement = document.addEventListener(".timer")
// var correctAnswer = []
// var currentQuestion = 0;
// var submitBtn = document.querySelector(".submitBtn")


// var questions = [
//     {
//         question: "why is the sky blue?",
//         answers: [
//             "relfection",
//             "dust",
//             "UFO",
//             "whatever"
//         ],
//         correctAnswer: 0
//     },

//     {
//         question: "what does HTML stand for?",
//         answers: [
//             "CSS",
//             "Hypertext Markup Language",
//             "Aliens",
//             "Ginger Ale"
//         ],
//         correctAnswer: 1
//     },    

// ];



// questions[currentQuestion].answers.forEach((answer, index) => {
//     document.createElement('<button class ="answerBtn" data-index-$')
// },
//     // Timer function

//     start.addEventListener("click", submit

// function timer() {
//     timer = setInterveral(function () {
//         timerCount--;
//         timerElement.textContent = timerCount;
//     }, 1000);
//     // if (timerCount = 0) {
//     //     if (timerCount)
//     //     clearInterval(timer);
// };
        
    

// // Start button = timer starts 
// function start() {
//     Begin()
//     var questionData = questions[currentQuestion];
//     AnswerA.innerText = questionData.a;
//     AnswerB.innerText = questionData.b;
//     AnswerC.innerText = questionData.c;
//     AnswerD.innerText = questionData.d;
// };

// // Correct Answer 
// function.question1();
// if (userAnswer = correctAnswer1) {
//     var correctAnswer1 = answerA
//     var
// }

// // Incorrect answer = subtract time from timer 

// // Game over = All questions answered OR timer '0' 

// //  Record function, displays score & initial attempts  