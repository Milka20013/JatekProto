/// <reference path="../types/index.d.ts" />

class CityScene extends Phaser.Scene {
  constructor(name: string) {
    super(name);
  }
  create() {
    const bg = this.add.sprite(0, 0, ImageIdConstants.cityBg);
    bg.setOrigin(0, 0);
    const magicShopDoor = this.add
      .rectangle(370, 400, 200, 275, 0xe06ed7)
      .setInteractive({ cursor: "pointer" });
    magicShopDoor.alpha = 0.01;
    magicShopDoor.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start("magicShop");
    });
    const equipmentShopDoor = this.add
      .rectangle(1200, 500, 200, 425, 0xe06ed7)
      .setInteractive({ cursor: "pointer" });
    equipmentShopDoor.alpha = 0.01;
    equipmentShopDoor.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start("equipmentShop");
    });
    const arenaDoor = this.add
      .rectangle(660, 275, 150, 150, 0xe06ed7)
      .setInteractive({ cursor: "pointer" });
    arenaDoor.alpha = 0.01;
    arenaDoor.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start("arenaLobby");
    });

    const checkStatsButton = this.add
      .sprite(640, 660, ImageIdConstants.toStatButton)
      .setScale(100 / 512, 100 / 512)
      .setInteractive({ cursor: "pointer" })
      .on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.scene.start("stat");
      });
  }
}
