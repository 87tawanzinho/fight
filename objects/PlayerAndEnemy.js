import { Fighter } from "../class/figther.js";
const player = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    // not moving by default
    x: 0,
    y: 0,
  },
  color: "red",
  offset: {
    x: 0,
    y: 0,
  },
});

player.draw(); // i using the method of the class that i use

const enemy = new Fighter({
  position: {
    x: 400,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: -50,
    y: 0,
  },
  color: "blue",
});

export { player, enemy };
