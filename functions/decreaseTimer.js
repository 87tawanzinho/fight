import { enemy, player } from "../objects/PlayerAndEnemy.js";

const count = document.querySelector("#timer");
const result = document.querySelector("#result");
const button = document.querySelector("#buttonAfterWin");
let timer = 30;
function decreaseTimer() {
  setTimeout(decreaseTimer, 1000);
  if (timer > 0) timer--;
  count.innerHTML = timer;

  if (timer === 0) {
    if (player.health === enemy.health) {
      result.classList.add("wins");
      result.innerHTML = "A Tie";
    }
    if (player.health > enemy.health) {
      result.classList.add("wins");
      result.innerHTML = "Player 1 wins";
    }
    if (enemy.health > player.health) {
      result.classList.add("wins");
      result.innerHTML = "Player 2 wins";
    }
  }
}

function WhoWins() {
  if (enemy.health === 0) {
    result.classList.add("wins");
    result.result.innerHTML = "Player 1 wins";
    timer = 0;
    return;
  }
  if (player.health === 0) {
    result.classList.add("wins");
    result.innerHTML = "Player 2 wins";
    timer = 0;
  }
}

export { decreaseTimer, WhoWins };
