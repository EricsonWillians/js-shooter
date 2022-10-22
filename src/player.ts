import { Sprite, Texture } from "pixi.js";
// @ts-ignore
import keyboard from "pixi.js-keyboard";

const player = Sprite.from(Texture.WHITE);
const playerState = {
  isRunning: false,
  lives: 3,
};

const PLAYER_SIZE = 32;
const PLAYER_SPEED = 8;
const PLAYER_COLOR = 0x00ff00;
const PLAYER_RUNNING_SPEED = PLAYER_SPEED * 2;

export const spawnPlayer = (app: any): void => {
  player.width = PLAYER_SIZE;
  player.height = PLAYER_SIZE;
  player.tint = PLAYER_COLOR;
  player.anchor.set(0.5);

  player.x = app.screen.width / 2;
  player.y = app.screen.height / 2;

  app.stage.addChild(player);
};

export const getCurrentSpeed = (): number => {
  return playerState?.isRunning ? PLAYER_RUNNING_SPEED : PLAYER_SPEED;
};

export const handlePlayerEvents = () => {
  // Keyboard
  if (keyboard.isKeyDown("ArrowLeft", "KeyA")) player.x -= getCurrentSpeed();
  if (keyboard.isKeyDown("ArrowRight", "KeyD")) player.x += getCurrentSpeed();

  if (keyboard.isKeyDown("ArrowUp", "KeyW")) player.y -= getCurrentSpeed();
  if (keyboard.isKeyDown("ArrowDown", "KeyS")) player.y += getCurrentSpeed();

  if (keyboard.isKeyDown("ShiftLeft")) {
    playerState.isRunning = true;
  } else {
    playerState.isRunning = false;
  }
};

export default player;
