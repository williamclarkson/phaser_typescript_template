
export class SceneMain extends Phaser.Scene {
    constructor() {
        super("SceneMain");
    }
    preload() {
        this.load.image("face", "./assets/face.png");
    }
    create() {
        
        let face:Phaser.GameObjects.Image=this.add.image(400, 300, "face");
    }
}