import Phaser from 'phaser';
import { SceneMain } from "./scenes/SceneMain";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,    
    backgroundColor:'cccccc',
    parent: 'phaser-game',
    scene: [SceneMain]
};

new Phaser.Game(config);