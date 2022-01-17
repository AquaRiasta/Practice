const board = document.querySelector('.board-container');
const boxes = document.querySelectorAll('.box');
const mode = document.querySelector('input[name="mode"]:checked');
const infoDisplay = document.querySelector('.info-display');
const userAction = document.querySelector('.user-action');
const disableSelection = document.querySelector('.disable-selection');
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var gameLog = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var gameTurn = "cross";
var gameIsRunning = true;

function displayWinner(player) {
  infoDisplay.textContent = '"' + player + '" won!'
}

function gameLogic() {
  function checker(target) {
    for (let i = 0; i < winningCombination.length; ++i) {
      let isValid = true;
      for (let j = 0; j < winningCombination[i].length && isValid; ++j) {
        isValid = (winningCombination[i].includes(target));
      }
      if (isValid) {
        displayWinner((target == 1) ? "cross" : "circle");
        gameIsRunning = false;
        disableSelection.style.display = "block";
        break;
      }
    }
  }

  checker(1);
  checker(2);
}

function gameInput() {
  for (let i = 0; i < boxes.length; ++i) {
    boxes[i].addEventListener('click', () => {
      gameLog[i] = (gameTurn == "cross") ? 1 : 2;
      boxes[i].classList.add(gameTurn);
      if (gameTurn == "cross") {
        gameTurn = "circle";
        board.classList.remove("cross");
        board.classList.add("circle");
      } else if (gameTurn == "circle") {
        gameTurn = "cross";
        board.classList.remove("circle");
        board.classList.add("cross");
      }
    });
    gameLogic();
  }
}

gameInput();