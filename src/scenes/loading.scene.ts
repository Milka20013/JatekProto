/// <reference path="../types/index.d.ts" />

class LoadingScene extends Phaser.Scene {
  constructor(name: string) {
    super(name);
  }
  preload() {
    const assetsPath: string = "assets/";
    //load images
    this.load.image(ImageIdConstants.background, assetsPath + "bg.png");
    this.load.image(ImageIdConstants.plus, assetsPath + "plus.png");
    this.load.image(ImageIdConstants.check, assetsPath + "check.png");
    this.load.image(ImageIdConstants.panel, assetsPath + "panel.png");
    this.load.image(ImageIdConstants.cityBg, assetsPath + "CityBg.png");
    this.load.image(
      ImageIdConstants.shopBgDefault,
      assetsPath + "ShopBgDefault.png"
    );
    this.load.image(
      ImageIdConstants.equipmentShopBg,
      assetsPath + "EquipmentShopBg.png"
    );
    this.load.image(
      ImageIdConstants.notYetImplementedBg,
      assetsPath + "NAN.png"
    );

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
    /*this.load.on("progress", (percentage: number) => {
      loadingLine.setSize(percentage * 200, loadingLine.height);
      Phaser.Display.Align.In.LeftCenter(loadingLine, loadingBar);
      this.scene.start("home");
    });*/
  }
  create() {
    this.scene.start("home");
  }
}
