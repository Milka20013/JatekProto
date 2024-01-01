"use strict";
/// <reference path="../types/index.d.ts" />
class HomeScene extends Phaser.Scene {
    constructor(name) {
        super(name);
    }
    create() {
        const bg = this.add.sprite(0, 0, "bg");
        bg.setOrigin(0, 0);
        const text = this.add.text(0, 0, "Play", {
            font: "48px",
        });
        const textBg = this.add.rectangle(0, 0, text.width + 20, text.height + 20, 0x000000, 1);
        textBg.alpha = 0.5;
        Phaser.Display.Align.In.Center(text, bg);
        Phaser.Display.Align.In.Center(textBg, text);
        text.setInteractive({ cursor: "pointer" });
        text.setDepth(1);
        text.on(Phaser.Input.Events.POINTER_OVER, () => {
            textBg.alpha = 1;
        });
        text.on(Phaser.Input.Events.POINTER_OUT, () => {
            textBg.alpha = 0.5;
        });
        text.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.scene.start("stat");
        });
    }
}
//# sourceMappingURL=home.scene.js.map