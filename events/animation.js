import { keys } from "../objects/keys.js";
import { canvas, c } from "../objects/canvas.js";
import { player, enemy } from "../objects/PlayerAndEnemy.js";
import { rectangularColision } from "../functions/rectangularColision.js";
import { decreaseTimer, WhoWins } from "../functions/decreaseTimer.js";
import { event1, event2 } from "../functions/eventsSprite.js";
import { Sprite } from "../class/sprite.js";
decreaseTimer();
WhoWins();
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/background.png",
});
event1, event2;

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  player.update();
  enemy.update();
  player.velocity.x = 0;
  enemy.velocity.x = 0;
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
  } else if (keys.w.pressed && player.lastKey === "w") {
    player.velocity.y = -15;
  }

  //enemy moviment
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
  } else if (keys.ArrowUp.pressed && enemy.lastKey === "ArrowUp") {
    enemy.velocity.y = -15;
  }

  if (rectangularColision()) {
    if (enemy.isAttacking) {
      player.health -= 1;
      document.querySelector("#playerHealth").style.width = player.health + "%";

      console.log("enemy attack sucessfully");
    }
    if (player.isAttacking) {
      enemy.health -= 1;
      document.querySelector("#enemyHealth").style.width = enemy.health + "%";
      console.log("player attack sucessfully");
    }

    if (enemy.health <= 0 || player.health <= 0) {
      WhoWins();
    }
  }
}
export { event1, event2, animate };
