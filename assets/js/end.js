// assign variables
const username = document.getElementById('username');
const recentScore = localStorage.getItem('recentScore');
const submitScoreButton = document.getElementById('submit-score-button');
const finalScore = document.getElementById('final-score');

// use JSON parse and stringify methods to get high score data from the local storage 
const highestScores = JSON.parse(localStorage.getItem('highestScores')) || [];

const MAX_HIGHEST_SCORES = 10;

// display score to the user
finalScore.innerText = `You scored ${recentScore} out of 200`;

// disable submit button if there is no input in the input field 
username.addEventListener('keyup', () => {
    submitScoreButton.disabled = !username.value;
});

// add function to submit score and select top 10 highest score from the local storage
function submitScore(e){
    e.preventDefault();
    const score = {
        score: recentScore,
        name: username.value,
    };
    highestScores.push(score);
    highestScores.sort((x, y)=>{
return y.score - x.score
    });
    highestScores.splice(10);

    localStorage.setItem('highestScores', JSON.stringify(highestScores));

    //return to home page after submitting username
    window.location.assign('/NutriQuizz/index.html');
};