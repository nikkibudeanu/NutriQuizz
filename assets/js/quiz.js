const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('options-content'));
const questionNumberDisplay = document.getElementById('question-number');
const scoreDisplay = document.getElementById('score');


let currentQuestion={};
let hasAnyOptionBeenClicked = false;
let score= 0;
let questionNumber =0;
let availableQuestions =[];

const QUESTION_BANK = [
 
        {
            question: "Which of the following nutrients provides energy to the body?",
            option1: 'carbohydrates',
            option2: 'vitamins',
            option3: 'water',
            option4: 'minerals',
            answer: 1,
        },
        {
            question: "Which nutrient supplies the most calories per gram? ",
            option1: 'carbohydrates',
            option2: 'fats',
            option3: 'protein',
            option4: 'water',
            answer: 2,
        },
        {
            question: "What is the main reason for eating a wide variety of foods? ",
            option1: 'to learn the food label',
            option2: 'to provide all the nutrients you need ',
            option3: 'to keep from getting bored with your diet ',
            option4: 'to help improve physical fitness',
            answer: 2,
        },
        {
            question: "The amount of energy the body gets from food is measured in.",
            option1: 'Metabolism',
            option2: 'Diet',
            option3: 'Calories',
            option4: 'Protein',
            answer: 3,
        },
        {
            question: "The three nutrients that provide the body with energy are:",
            option1: 'carbohydrate, fat, and protein',
            option2: 'calories, fat, and vitamins',
            option3: 'carbohydrate, vitamins, and fat',
            option4: 'calories, vitamins, and minerals',
            answer: 1,
        },
        {
            question: "Which of the following nutrients is important for body, cell, and muscle growth and repair?",
            option1: 'vitamins',
            option2: 'fats',
            option3: 'proteins',
            option4: 'carbohydrates',
            answer: 3,
        },
        {
            question: "_____ is/are the body's main or 1st choice of energy",
            option1: 'water',
            option2: 'carbohydrates',
            option3: 'protein',
            option4: 'fats',
            answer: 2,
        },
        {
            question: "Which food group does yogurt and milk belong in?",
            option1: 'protein',
            option2: 'vegetables',
            option3: 'fruit',
            option4: 'dairy',
            answer: 4,
        },
        {
            question: "____________ this substance is very addictive and is added to almost every processed food.",
            option1: 'salt',
            option2: 'sugar',
            option3: 'msg',
            option4: 'pepper',
            answer: 2,
        },
        {
            question: "______________ are very good for your immune system to be healthy and some can even fight cancer.",
            option1: 'vegetables',
            option2: 'meat',
            option3: 'sugar',
            option4: 'carbohydrates',
            answer: 1,
        },
        {
            question: "The number of calories that you can eat each day without gaining weight depends on your:",
            option1: 'activity level',
            option2: 'hunger',
            option3: 'environment',
            option4: 'mental health',
            answer: 1,
        },
        {
            question: "How many calories per gram does fat have?  ",
            option1: '10',
            option2: '9',
            option3: '4',
            option4: '7',
            answer: 2,
        },
        {
            question: "Where does most of your vitamin D come from?",
            option1: 'eggs',
            option2: 'cereal',
            option3: 'sunlight',
            option4: 'oily fish',
            answer: 3,
        },
        {
            question: "Which of these is a healthier choice of fat?            ",
            option1: 'trans fats',
            option2: 'saturated fats',
            option3: 'unsaturated fats',
            option4: 'none',
            answer: 3,
        },
        {
            question: "How much calcium does an adult need each day?",
            option1: '100mg',
            option2: '100g',
            option3: '700mg',
            option4: '400mg',
            answer: 3,
        },
        {
            question: "Which of the following is a whole grain?            ",
            option1: 'popcorn',
            option2: 'couscous',
            option3: 'corn tortilla',
            option4: 'multigrain bread',
            answer: 1,
        },
        {
            question: "Which of the following is not an added sugar?            ",
            option1: 'high-fructose corn syrup',
            option2: 'maple syrup',
            option3: 'honey',
            option4: 'fructose',
            answer: 4,
        },
        {
            question: "Which of these is a solid fat?            ",
            option1: 'butter',
            option2: 'chicken fat',
            option3: 'hydrogenated oils',
            option4: 'all of the above',
            answer: 4,
        },
        {
            question: "Which of these oils and fats is healthiest for cooking?            ",
            option1: 'butter',
            option2: 'canola',
            option3: 'margarine',
            option4: 'lard',
            answer: 2,
        },
        {
            question: "Which of these sweeteners comes from a plant?            ",
            option1: 'stevia',
            option2: 'aspartame',
            option3: 'sucralose',
            option4: 'neotame',
            answer: 1,
        }
        ];


  
  
//CONSTANTS
  const CORRECT_AWARD =10 ;
  const MAX_QUESTIONS =20;
  
  
  function startGame() {
    questionNumber=0;
    score=0;

    availableQuestions=[...QUESTION_BANK];


    // Randomise the question sequence
    availableQuestions = availableQuestions.sort( () => .5 - Math.random() );
    addEventListenerToOptions();
    getNextQuestion();
}

function getNextQuestion() {
  
    // End of quiz 
    if(questionNumber >= MAX_QUESTIONS){
        localStorage.setItem('recentScore', score);
        return window.location.assign("/end.html");
    }

    questionNumber++;
// Update question number text on UI
    questionNumberDisplay.innerText = questionNumber + "/" + MAX_QUESTIONS;

// Picking the next question index which comes sequentially
currentQuestion = availableQuestions[questionNumber - 1];
question.innerText = currentQuestion.question;


// Displaying each option
options.forEach(option => {
    const number = option.dataset['number'];
    option.innerText = currentQuestion['option' + number];
});
    
    hasAnyOptionBeenClicked=false;
}

//add function for options in html file
function addEventListenerToOptions() {
    options.forEach(option=>{
      option.addEventListener('click', e => {
          if(hasAnyOptionBeenClicked) return;
          hasAnyOptionBeenClicked = true;
      
          const clickedOption = e.target;
          const clickedAnswer = clickedOption.dataset['number'];
  
          const isAnswerCorrect = clickedAnswer == currentQuestion.answer;
        // add new class for right and wrong answers
          const classToApply = isAnswerCorrect ? "right" : "wrong";
          
  // add condition for score to increment
          if(isAnswerCorrect) {
              raiseScore();
          }
  
          clickedOption.parentElement.classList.add(classToApply);
  
          const timeoutRef = setTimeout(() => {
              clickedOption.parentElement.classList.remove(classToApply);
              getNextQuestion();
              clearTimeout(timeoutRef);
            }, 1000);
      });
    });
  }
// add function to raise the score by 10 each time the answer is right
  function raiseScore() {
      score += CORRECT_AWARD;
      scoreDisplay.innerText = score;
  }

  // BACKGROUND MUSIC 
  // background music variables
  let music = document.getElementById('music');
  music.volume = 0.2;
  music.loop = true;
  let soundOn = false;

  // music control function 
function musicCtrl() {
    soundOn = !soundOn;
    if (soundOn) {
        music.play();
        //add class to hide icons
        document.getElementById("sound-on").classList.add('hidden');
        document.getElementById("sound-off").classList.remove('hidden');
    } else {
        music.pause();
        document.getElementById("sound-off").classList.add('hidden');
        document.getElementById("sound-on").classList.remove('hidden');
    }
}

  
  
  startGame();

  
