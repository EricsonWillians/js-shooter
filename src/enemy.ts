import { Sprite, Texture } from "pixi.js";

const enemy = Sprite.from(Texture.WHITE);

const ENEMY_SIZE = 32;
const ENEMY_SPEED = 4;
const ENEMY_COLOR = 0xff0000;

export const spawnEnemy = (app: any): void => {
  enemy.width = ENEMY_SIZE;
  enemy.height = ENEMY_SIZE;
  enemy.tint = ENEMY_COLOR;
  enemy.anchor.set(0.5);

  enemy.x = Math.floor(Math.random() * app.screen.width - ENEMY_SIZE) + 1;
  enemy.y = -ENEMY_SIZE;

  app.stage.addChild(enemy);
};

export const respawnEnemy = (app: any): void => {
  if (enemy.y > app.screen.height) {
    app.stage.removeChild(enemy);
    spawnEnemy(app);
  }
};

export const handleEnemyEvents = (app: any) => {
  enemy.y += ENEMY_SPEED;
  respawnEnemy(app);
};
