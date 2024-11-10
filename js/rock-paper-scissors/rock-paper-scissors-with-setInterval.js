let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// to display score on the page on first load
updateScoreElement();

// cancel auto play after clicking auto play buton
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    // setinterval returns a number and this number is like ID, we can use this ID to stop the interval

    // everytime we run the function we are gonna get a different variable so we need to put the variable outside the function
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();

      // playGame() needs a person to pick a move, so we use pickComputerMove to give te playGame function random move
      // now the computer is playing against themself every second
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    // to stop an interval we can use a function clearInterval()
    // which gets an ID that we want to stop
    clearInterval(intervalId);

    // need to change auto playin to false because we stopped playing
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  // update score object based on the result of the game
  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
  <img
    src="../../images/rock-paper-scissors/${playerMove}-emoji.png"
    alt=""
    class="move-icon"
  />
  <img
    src="../../images/rock-paper-scissors/${computerMove}-emoji.png"
    alt=""
    class="move-icon"
  />
  Computer`;
}

function resetScore() {
  (score.wins = 0),
    (score.losses = 0),
    (score.ties = 0),
    localStorage.removeItem("score");
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = null;
  document.querySelector(".js-moves").innerHTML = null;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
