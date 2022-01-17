const options = ["Rock", "Paper", "Scissors"];

const computerPlay = () => Math.floor(Math.random() * 3);

const playRound = (player, computer) =>
  player == computer
    ? `Game is tied`
    : player > computer || (player == 0 && computer == 2)
    ? `Player win, ${options[player]} beats ${options[computer]}`
    : `Computer win, ${options[computer]} beats ${options[player]}`;

const playerInput = "rock";

const playerSelection = (str) =>
  options.findIndex(
    (element) => str.charAt(0).toUpperCase() + str.substring(1) == element
  );
const computerSelection = computerPlay();
console.log(playRound(playerSelection(playerInput), computerSelection));
