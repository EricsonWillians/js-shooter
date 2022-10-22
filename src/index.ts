import { Application } from "pixi.js";
import { collideWithEnemy, handlePlayerEvents, spawnPlayer } from "./player";
// @ts-ignore
import keyboard from "pixi.js-keyboard";
import { spawnEnemy, handleEnemyEvents } from "./enemy";

export const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x777777,
  width: window.innerWidth,
  height: window.innerHeight,
});

app.ticker.add((delta) => gameLoop(delta));
const gameLoop = (delta: number) => {
  // Update the current game state:
  run(delta);

  keyboard.update();
};

spawnPlayer();
const enemy = spawnEnemy();

const run = (_delta: number) => {
  handlePlayerEvents();
  handleEnemyEvents();
  collideWithEnemy(enemy)
};
