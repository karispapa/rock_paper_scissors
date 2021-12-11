/* 
- Code for rock paper scissors game
- Player will play aganist a random selection of the computer 

Rules: 
- Rock Crushes scissors and is covered by paper 
- Scissors crushed by rock and cuts paper 
- Same objects result to a draw
- assign 1 point to a draw and 3 points to a win
*/

//

// computer selection
const computerPlay = () => {
  const randInt = Math.floor(Math.random() * 3);

  if (randInt === 0) {
    return "rock";
  } else if (randInt === 1) {
    return "scissors";
  } else {
    return "paper";
  }
  //   console.log(randInt);
};

// user selection
const userPlay = () => {
  const userSelection = prompt(
    "Please enter Your Selelectin - Rock, Paper, or Scissors"
  );

  return userSelection.toLowerCase().trim();
};

// play 1 round

const playRound = (computerSelection, playerSelection) => {
  console.log(computerSelection, playerSelection);
  let computerScore = 0;
  let playerScore = 0;

  // 1st Scenario
  if (computerSelection === "rock") {
    // console.log("Computer on rock");

    if (playerSelection === "paper") {
      playerScore = 1;
    } else if (playerSelection === "scissors") {
      computerScore = 1;
    } else {
      computerScore = 0;
      playerScore = 0;
    }
  } else if (computerSelection === "scissors") {
    // console.log("Computer on Scissors");
    if (playerSelection === "rock") {
      playerScore = 1;
    } else if (playerSelection === "paper") {
      computerScore = 1;
    } else {
      computerScore = 0;
      playerScore = 0;
    }
  } else if (computerSelection === "paper") {
    // console.log("Computer on paper");

    if (playerSelection === "scissors") {
      playerScore = 1;
    } else if (playerSelection === "rock") {
      computerScore = 1;
    } else {
      computerScore = 0;
      playerScore = 0;
    }
  } else {
    computerScore = 0;
    playerScore = 0;
  }

  //   return { computerScore, usercore };
  return { computerScore, playerScore };
};

const playGame = () => {
  document.getElementById("results").innerHTML = "";
  const playerName = prompt("Please Enter Your Name");
  console.log(`${playerName}: Welcome to the Rock, Paper and Scissors Game`);
  const round = parseInt(
    prompt(" Please Enter the number of rounds for the game")
  );
  let compScore = 0;
  let playeScore = 0;
  for (let i = 1; i <= round; i++) {
    console.log(`Round ${i}`);
    const compPlay = computerPlay();
    const playerPlay = userPlay();
    const scores = playRound(compPlay, playerPlay);
    const outPut = `${scores.computerScore}, ${playerName} :${scores.playerScore}`;
    if (scores.computerScore > scores.playerScore) {
      compScore += 1;
      console.log(`Computer ${outPut}`);
      alert(`The computer Wins scores: Computer ${outPut}`);
    } else if (scores.computerScore < scores.playerScore) {
      playeScore += 1;
      console.log(`Computer ${outPut}`);
      alert(`${playerName} wins scores - Computer ${outPut}`);
    } else {
      playeScore = playeScore;
      compScore = compScore;
      console.log(`Computer ${outPut}`);
      alert(`This is a draw Computer ${outPut}`);
    }

    console.log(
      `Round ${i} scores computer: ${compScore} points ${playerName}: ${playeScore} points`
    );
  }

  if (compScore > playeScore) {
    const str = `The computer wins the ${round} rounds with ${compScore} points aganist ${playerName} with ${playeScore} points`;
    console.log(str);
    document.getElementById("results").innerHTML = str;
  } else if (compScore < playeScore) {
    const str = ` ${playerName} wins the ${round} rounds with ${playeScore} points aganist computer with ${compScore} points aganist `;
    console.log(str);
    document.getElementById("results").innerHTML = str;

    // alert(str);
  } else {
    const str = ` This is a draw of  ${playeScore} points for the ${round} rounds`;
    console.log(str);
    alert(str);
    document.getElementById("results").innerHTML = str;
  }
  console.log(`THE END`);
};

// playGame();
document.getElementById("start-game").addEventListener("click", () => {
  console.clear(), playGame();
});
