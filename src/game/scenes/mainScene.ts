import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  tick: number = 0;
  constructor() {
    super("main");
  }

  create() {
    console.log("hello world");
  }

  update() {
  }
}
