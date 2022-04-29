const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const computerHand = document.getElementById("computer-hand");
const playBtn = document.getElementById("play-game");
const game = document.querySelector('#game');
//const images = ["/imgs/paper.png", "/imgs/rock.png", "/imgs/scissors.png"];

let playerOneChoice = "";
let computerChoice = "";
let message = "";

game.addEventListener('mousedown', function (e) {
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

playBtn.addEventListener("click", getwinner);

  //Player chooses weapon
  playerScissors.addEventListener("click", function () {
    playerOneChoice = "scissors";
  });
  playerPaper.addEventListener("click", function () {
    playerOneChoice = "paper";
  });
  playerRock.addEventListener("click", function () {
    playerOneChoice = "rock";
  });
console.log(playerOneChoice);
  

if (playerOneChoice != null) { changePicturesPlayer(); }
if (playerOneChoice != null) { computerRandomChoice(); }


function computerRandomChoice() {
  const computerRandom = Math.floor(Math.random() * 3 + 1);
  //Computer chooses weapon
  if (computerRandom === 1) {
    computerChoice = "rock";
  } else if (computerRandom === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
   changePictures();
  }
  console.log(computerChoice);

  function getwinner() {
  //Determine winner
  if (playerOneChoice === "rock" && computerChoice === "scissors") {
    message = "Player one wins!";
  } else if (playerOneChoice === "paper" && computerChoice === "rock") {
    message = "Player one wins!";
  } else if (playerOneChoice === "scissors" && computerChoice === "paper") {
    message = "Player one wins!";
  } else if (playerOneChoice === computerChoice) {
    message = "Tie game!";
  } else if (playerOneChoice === "") {
    message = "Please choose a weapon!";
  } else {
    message = "Player two wins!";
  }

  playBtn.value = 'Play Again';
  playBtn.className += 'play-again';

  //Send winner an alert
  function sendMessage() {
    const div = document.createElement("div");
    div.className = "alert alert-success mt-5 text-center";
    div.style.backgroundColor = "#146c43";
    div.style.color = "white";
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    container.append(div);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  sendMessage();
  
}

//Set image to reflect Player Choice
//
//
function changePictures() {
  if (computerChoice === "rock") {
    computerHand.src = "/imgs/rock.png";
    computerHand.style.maxHeight = "400px";
    computerHand.style.maxWidth = "400px";
  } else if (computerChoice === "paper") {
    computerHand.src = "/imgs/paper.png";
    computerHand.style.maxHeight = "400px";
    computerHand.style.maxWidth = "400px";
  } else {
    computerHand.src = "/imgs/scissors.png";
    computerHand.style.maxHeight = "400px";
    computerHand.style.maxWidth = "400px";
  }
}

function changePicturesPlayer() {
  if (playerOneChoice === "rock") {
    playerRock.style.maxHeight = "400px";
    playerRock.style.maxWidth = "400px";
    playerPaper.style.display = "none";
    playerScissors.style.display = "none";
  } else if (playerOneChoice === "paper") {
    playerPaper.style.maxHeight = "400px";
    playerPaper.style.maxWidth = "400px";
    playerRock.style.display = "none";
    playerScissors.style.display = "none";
  } else {
    playerScissors.style.maxHeight = "400px";
    playerScissors.style.maxWidth = "400px";
    playerRock.style.display = "none";
    playerPaper.style.display = "none";
  }
  getwinner();
}

