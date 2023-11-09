/// <reference path="../types/index.d.ts" />

class EquipmentShopScene extends ShopScene {
  constructor(name: string) {
    super(name);
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.equipmentShopBg);
    const checkButton = this.add.sprite(
      this.width - 150,
      this.height - 150,
      ImageIdConstants.check
    );
    checkButton.setScale(100 / 512, 100 / 512);
    checkButton.setOrigin(0, 0);
    checkButton.setInteractive({ cursor: "pointer" });
    checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start("city");
    });
  }
}
