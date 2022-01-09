
// variables for the high score list 
const highestScoresList = document.getElementById("highestScoresList");

// use JSON parse methods to get high score data from the local storage  and create an array from it

const highestScores = JSON.parse(localStorage.getItem("highestScores")) || [];

// create a list to display the high scores
highestScoresList.innerHTML = highestScores
//create a new array using map()
  .map(score => {
    return `<li class="high-score">${score.name} : ${score.score}</li>`;
    
  })
  // create an return the array with high scores. Learnt from --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  .join("");