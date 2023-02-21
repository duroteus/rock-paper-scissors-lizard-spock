// Rules Modal
const rulesBtn = document.querySelector("#rules");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#closeModal");

// Open
const openModal = () => {
  modal.classList.add("open");
};

// Close
const closeModal = () => {
  modal.classList.remove("open");
};

rulesBtn.addEventListener("click", openModal());
closeBtn.addEventListener("click", closeModal());

// Game

const resultScreen = document.getElementById("score-screen");
const choicesScreen = document.getElementById("choices-screen");

const options = ["rock", "paper", "scissors", "lizard", "spock"];

let score = 0;
document.querySelector("#score").innerHTML = `${score}`;

const playerOptions = document.querySelectorAll(".button-wrap");

playerOptions.forEach((item) => {
  item.addEventListener("click", function choice(value) {
    const playerChoice = item.getAttribute("data-value");
    const housePick = document.querySelector("#house-pick");
    const playerPick = document.querySelector("#player-pick");
    const resultText = document.querySelector("#result-text");
    const statusText = document.querySelector("#status-text");

    const randomNumber = Math.floor(Math.random() * 5);
    const machineChoice = options[randomNumber];

    housePick.setAttribute("src", `assets/images/icon-${machineChoice}.svg`);
    playerPick.setAttribute("src", `assets/images/icon-${playerChoice}.svg`);

    choicesScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    if (playerChoice === "rock") {
      switch (machineChoice) {
        case "rock":
          resultText.innerHTML = "Draw";
          statusText.innerHTML = "Rock tie with Rock";
          break;
        case "paper":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Paper covers Rock";
          break;
        case "scissors":
          resultText.innerHTML = "Yow Win";
          statusText.innerHTML = "Rock crushes Scissors";
          score++;
          break;
        case "lizard":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Rock crushes Lizard";
          score++;
          break;
        case "spock":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Spock vaporizes Rock";
          break;
        default:
          break;
      }
    }

    if (playerChoice === "paper") {
      switch (machineChoice) {
        case "rock":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Paper covers Rock";
          score++;
          break;
        case "paper":
          resultText.innerHTML = "Draw";
          statusText.innerHTML = "Paper tie with Paper";
          break;
        case "scissors":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Scissors cuts Paper";
          break;
        case "lizard":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Lizard eats Paper";
          break;
        case "spock":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Paper disproves Spock";
          score++;
          break;
        default:
          break;
      }
    }

    if (playerChoice === "scissors") {
      switch (machineChoice) {
        case "rock":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Rock crushes Scissors";
          break;
        case "paper":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Scissors cuts Paper";
          score++;
          break;
        case "scissors":
          resultText.innerHTML = "Draw";
          statusText.innerHTML = "Scissors tie with Scissors";
          break;
        case "lizard":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Scissors decapitates Lizard";
          score++;
          break;
        case "spock":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Spock shamshes Scissors";
          break;
        default:
          break;
      }
    }

    if (playerChoice === "lizard") {
      switch (machineChoice) {
        case "rock":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Rock crushes Lizard";
          break;
        case "paper":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Lizard eats Paper";
          score++;
          break;
        case "scissors":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Scissors decapitates Lizard";
          break;
        case "lizard":
          resultText.innerHTML = "Draw";
          statusText.innerHTML = "Lizard tie with Lizard";
          break;
        case "spock":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Lizard poisons Spock";
          score++;
          break;
        default:
          break;
      }
    }

    if (playerChoice === "spock") {
      switch (machineChoice) {
        case "rock":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Spock vaporizes Rock";
          score++;
          break;
        case "paper":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Paper disproves Spock";
          break;
        case "scissors":
          resultText.innerHTML = "You Win";
          statusText.innerHTML = "Spock smashes Scissors";
          score++;
          break;
        case "lizard":
          resultText.innerHTML = "You Lose";
          statusText.innerHTML = "Lizard poisons Spock";
          break;
        case "spock":
          resultText.innerHTML = "Draw";
          statusText.innerHTML = "Spock tie with Spock";
          break;
        default:
          break;
      }
    }

    document.querySelector("#score").innerHTML = `${score}`;
  });
});

const rematchButton = document.querySelector("#rematch-button");
const rematch = () => {
  choicesScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
};

rematchButton.addEventListener("click", rematch);
