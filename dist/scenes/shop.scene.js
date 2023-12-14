"use strict";
/// <reference path="../types/index.d.ts" />
class ShopScene extends Phaser.Scene {
    constructor(name) {
        super(name);
    }
    init() {
        this.width = +this.sys.game.config.width;
        this.height = +this.sys.game.config.height;
    }
    create() {
        this.bg = this.add.sprite(0, 0, ImageIdConstants.shopBgDefault);
        this.bg.setOrigin(0, 0);
        this.checkButton = this.add.sprite(this.width - 150, this.height - 150, ImageIdConstants.check);
        this.checkButton.setScale(100 / 512, 100 / 512);
        this.checkButton.setOrigin(0, 0);
        this.checkButton.setInteractive({ cursor: "pointer" });
        this.checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.scene.start("city");
        });
    }
}
//# sourceMappingURL=shop.scene.js.map