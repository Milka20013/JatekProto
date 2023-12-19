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
    this.load.image(ImageIdConstants.arenaBG, assetsPath + "ArenaBG.png");
    this.load.image(ImageIdConstants.cancel, assetsPath + "cancel.png");
    this.load.image(
      ImageIdConstants.playerSprite,
      assetsPath + "Karakter2.png"
    );
    this.load.image(ImageIdConstants.enemySprite, assetsPath + "Karakter5.png");
    this.load.image(ImageIdConstants.healthBar, assetsPath + "Health_Bar.png");
    this.load.image(
      ImageIdConstants.attackLightSprite,
      assetsPath + "AttackLight.png"
    );
    this.load.image(
      ImageIdConstants.attackMediumSprite,
      assetsPath + "AttackMedium.png"
    );
    this.load.image(
      ImageIdConstants.attackHeavySprite,
      assetsPath + "AttackHeavy.png"
    );
    this.load.image(ImageIdConstants.BtierArmor, assetsPath + "BtierArmor.png");
    this.load.image(ImageIdConstants.GtierArmor, assetsPath + "GtierArmor.png");
    this.load.image(ImageIdConstants.StierArmor, assetsPath + "StierArmor.png");
    this.load.image(ImageIdConstants.BtierSword, assetsPath + "BtierSword.png");
    this.load.image(ImageIdConstants.GtierSword, assetsPath + "GtierSword.png");
    this.load.image(ImageIdConstants.StierSword, assetsPath + "StierSword.png");
    this.load.image(
      ImageIdConstants.toStatButton,
      assetsPath + "statArrow.png"
    );

    const bg = this.add.rectangle(
      0,
      0,
      +this.sys.game.config.width,
      +this.sys.game.config.height,
      0xffffff
    );
    Player.sword = Item.NullItem;
    Player.armor = Item.NullItem;
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
