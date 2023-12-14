"use strict";
/// <reference path="../types/index.d.ts" />
class ArenaLobbyScene extends ShopScene {
    constructor(name) {
        super(name);
    }
    create() {
        super.create();
        this.bg.setTexture(ImageIdConstants.arenaBG);
        this.enemy = new Enemy(Player.level * 3);
        Enemy.currentEnemy = this.enemy;
        const panel = this.add.sprite(this.width * 0.1, this.height * 0.1, ImageIdConstants.panel);
        panel.setOrigin(0, 0);
        //create the ui inside the panel
        const plusButtons = this.add.group();
        for (let i = 0; i < this.enemy.stats.stats.length; i++) {
            const plusButton = plusButtons.create(panel.x + panel.width - 75, panel.y + 25 + i * 125, ImageIdConstants.plus);
            plusButton.setOrigin(0, 0);
            plusButton.setScale(50 / 512, 50 / 512);
            plusButton.setAlpha(0);
            plusButton.setInteractive({ cursor: "pointer" });
            plusButton.on(Phaser.Input.Events.POINTER_OVER, () => {
                plusButton.setTintFill(0x0a6e49);
            });
            plusButton.on(Phaser.Input.Events.POINTER_OUT, () => {
                plusButton.setTintFill(0);
            });
            //the y value is not quite in line with the buttons
            const statNameText = this.add.text(plusButton.x - panel.width + plusButton.width * plusButton.scale * 2, plusButton.y + 5, this.enemy.stats.stats[i].name + "", { fontSize: "40px" });
            const statValueText = this.add.text(statNameText.x + panel.width / 2, statNameText.y, "" + this.enemy.stats.stats[i].value, { fontSize: "40px" });
        }
        const checkButton = this.add.sprite(this.width - 150, this.height - 150, ImageIdConstants.check);
        checkButton.setScale(100 / 512, 100 / 512);
        checkButton.setOrigin(0, 0);
        checkButton.setInteractive({ cursor: "pointer" });
        checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.scene.start("arena");
        });
        const cancelButtun = this.add.sprite(this.width - 250, this.height - 150, ImageIdConstants.cancel);
        cancelButtun.setScale(100 / 512, 100 / 512);
        cancelButtun.setOrigin(0, 0);
        cancelButtun.setInteractive({ cursor: "pointer" });
        cancelButtun.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.scene.start("city");
        });
    }
}
//# sourceMappingURL=arenaLobby.scene.js.map