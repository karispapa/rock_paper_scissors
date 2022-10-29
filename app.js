/* 


- Code for rock paper scissors game
- Player will play against a random selection of the computer 

Rules: 
- Rock Crushes scissors and is covered by paper 
- Scissors crushed by rock and cuts paper 
- Same objects result to a draw
- assign 1 point to a draw and 3 points to a win
*/

/*  
  1. Understand the problem
  2. Plan  
      •	Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper
       - yes: Display user interface, allow user to select the three options, select the number of rounds, reset the game, input their name, 
       quit the game, display the scores and the winner at the end of the game 
      •	What inputs will your program have? Will the user enter data or will you get input from somewhere else?
       - User selection 
       - User name 
       - Number of rounds 
       - 
      •	What’s the desired output?
       - Scores and the winner 
      •	Given your inputs, what are the steps necessary to return the desired output?
      a.  User selects start game 
      b. User enters their name and rounds 
      c.   User does the selection (rock, paper or scissors)
      d. Computer does a random selection (rock, paper or scissors)
      e. the program evaluates the score based on the logic
      f. if there are more rounds, repeat steps c,d,e, if not return the score and the winner, 
      g. allow the user to repeat the game(the game starts from ), or quit (the game goes back to step a)

  3. Pseudocode - write out the logic in natural language 
  4. Divide and conquer  
  - From your planning, you should have identified some sub-problems of 
  the big problem you’re solving. Each of the steps in the algorithm we 
  wrote out in the last section are sub-problems. Pick the smallest or simplest one and start there with coding.

*/

const userNameInput = document.querySelector('.name');
const roundsInput = document.querySelector('.rounds');
const nextBtn = document.querySelector('.next');
const inputForm = document.querySelector('form');
const gameDetailsDiv = document.querySelector('.game-details');
const startPageDiv = document.querySelector('.start-page');
const outputRound = document.querySelector('.play-round');
const outputUserName = document.querySelector('.player-name');
const outputTotalRounds = document.querySelector('.total-rounds');
const inputUserPlay = document.querySelector('.user-play');
const restartButton = document.querySelector('.restart');

// variables declaration and Initialization
let playerName, rounds, playerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 0;

gameDetailsDiv.classList.add('hidden');
inputForm.classList.add('hidden');

nextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  playerName = userNameInput.value;
  rounds = parseInt(roundsInput.value);

  outputTotalRounds.innerHTML = rounds;
  outputUserName.innerHTML = playerName;

  if (playerName.length > 1 && rounds > 1) {
    inputForm.classList.add('hidden');
    gameDetailsDiv.classList.remove('hidden');
  } else alert('Please Enter your name and Number of Rounds');
});

// computer play
const computerPlay = () => {
  // generate random number 1 - 3
  // ~~ can  be used to substitute math.floor
  const selectionArray = ['rock', 'paper', 'scissors'];
  return selectionArray[Math.trunc(Math.random() * selectionArray.length)];
};

// play round

const playRound = (userSelection) => {
  const computerSelection = computerPlay();

  console.log(computerSelection, userSelection);

  if (
    (computerSelection === 'rock' && userSelection === 'scissors') ||
    (computerSelection === 'scissors' && userSelection === 'paper') ||
    (computerSelection === 'paper' && userSelection === 'rock')
  ) {
    computerScore += 1;
  } else if (computerSelection === playerSelection) {
    // do nothing or go to next
  } else {
    playerScore += 1;
  }

  console.log(computerScore, playerScore);
};

// update scores
const updateScores = (compScore, playScore) => {
  document.querySelector('.player-score').innerHTML = playScore;
  document.querySelector('.computer-score').innerHTML = compScore;
};

// declare winner
const declareWinner = () => {
  if (computerScore > playerScore) {
    alert(`Computer has won with ${computerScore} scores`);
  } else if (playerScore > computerScore) {
    alert(`${playerName} has won with ${playerScore} scores`);
  } else alert(`Its a draw of ${computerScore}`);
};

// event listeners
inputUserPlay.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', function () {
    playerSelection = button.id.toLowerCase();
    round += 1;
    outputRound.innerHTML = round;

    if (round <= rounds) {
      playRound(playerSelection);
      updateScores(computerScore, playerScore);
    } else {
      declareWinner();
      round = 0;
    }
  });
});

// start game

startPageDiv.querySelector('button').addEventListener('click', function (e) {
  computerScore = 0;
  playerScore = 0;
  round = 0;
  inputForm.classList.remove('hidden');
  startPageDiv.classList.remove('start-page');
  startPageDiv.classList.add('hidden');
});

//Restart game
restartButton.addEventListener('click', function () {
  computerScore = 0;
  playerScore = 0;
  round = 0;
  updateScores(computerScore, playerScore);
});
