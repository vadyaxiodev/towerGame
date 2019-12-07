import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import plantImg from "./assets/plant.jpg";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('plant', plantImg);
  this.load.image('logo', logoImg);
}

function create() {
  const plant = this.add.image(0, 0, 'plant').setOrigin(0, 0).setScale(2);
  
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
}

ReactDOM.render(<App />, document.getElementById("root"));