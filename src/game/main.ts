import { Game } from "phaser";
import { MainScene } from "./scenes/mainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  pixelArt: true,
  physics: {
    default: "arcade",
  },
  width: 960,
  height: 540,
  antialias: false,
  autoRound: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "game-container",
  backgroundColor: "#028af8",
  scene: [MainScene],
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
