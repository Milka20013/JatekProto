"use strict";
/// <reference path="../types/index.d.ts" />
class FightResultScene extends Phaser.Scene {
    constructor(name) {
        super(name);
    }
    create() {
        this.add.sprite(0, 0, ImageIdConstants.background).setOrigin(0, 0);
        const checkButton = this.add
            .sprite(1130, 570, ImageIdConstants.check)
            .setInteractive({ cursor: "pointer" })
            .setScale(100 / 512, 100 / 512)
            .setOrigin(0, 0);
        const resultText = this.add.text(500, 500, "");
        if (FightResultScene.won) {
            const levelled = Player.win();
            Player.reset();
            resultText.text = "You won!";
            this.add.text(500, 600, "You recieved " + FightResultScene.goldAmount + " Gold");
            checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
                if (levelled) {
                    this.scene.start("stat");
                }
                else {
                    this.scene.start("city");
                }
            });
        }
        else {
            resultText.text = "You lost...";
            checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
                this.scene.start("stat");
            });
        }
    }
}
FightResultScene.resultStr = "asd";
//# sourceMappingURL=fightResult.scene.js.map