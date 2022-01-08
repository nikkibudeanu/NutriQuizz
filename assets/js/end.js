const username = document.getElementById('username');
const recentScore = localStorage.getItem('recentScore');
const submitScoreButton = document.getElementById('submit-score-button');
const finalScore = document.getElementById('final-score');

const highImg = document.getElementById('high');
const mediumImg = document.getElementById('medium');
const lowImg = document.getElementById('low');
const message = document.getElementById('message');

const highestScores = JSON.parse(localStorage.getItem('highestScores')) || [];

const MAX_HIGHEST_SCORES = 10;

finalScore.innerText = `You scored ${recentScore} out of 200`;


username.addEventListener('keyup', () => {
    submitScoreButton.disabled = !username.value;
});

submitScore = (e) => {
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
    window.location.assign('/');
};