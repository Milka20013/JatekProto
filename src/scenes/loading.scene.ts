/// <reference path="../types/index.d.ts" />

class LoadingScene extends Phaser.Scene {
  constructor(name: string) {
    super(name);
  }
  preload() {
    //load images
    this.load.image(ImageIdConstants.background, "assets/bg.png");
    this.load.image(ImageIdConstants.plus, "assets/plus.png");
    this.load.image(ImageIdConstants.check, "assets/check.png");
    this.load.image(ImageIdConstants.panel, "assets/panel.png");

    const bg = this.add.rectangle(
      0,
      0,
      +this.sys.game.config.width,
      +this.sys.game.config.height,
      0xffffff
    );
    bg.setOrigin(0, 0);
    const loadingBar = this.add.rectangle(0, 0, 200, 40, 0x000000, 0.1);
    Phaser.Display.Align.In.Center(loadingBar, bg);
    const loadingLine = this.add.rectangle(0, 0, 0, 40, 0x50f31f);
    Phaser.Display.Align.In.LeftCenter(loadingLine, loadingBar);
    this.load.on("progress", (percentage: number) => {
      loadingLine.setSize(percentage * 200, loadingLine.height);
      Phaser.Display.Align.In.LeftCenter(loadingLine, loadingBar);
    });
  }
  create() {
    this.scene.start("home");
  }
}
