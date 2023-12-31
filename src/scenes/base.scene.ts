/// <reference path="../types/index.d.ts" />

class BaseScene extends Phaser.Scene {
  bg!: Phaser.GameObjects.Sprite;
  height!: number;
  width!: number;
  checkButton!: Phaser.GameObjects.Sprite;
  toolTip!: Phaser.GameObjects.Text;
  constructor(name: string) {
    super(name);
  }
  init() {
    this.width = +this.sys.game.config.width;
    this.height = +this.sys.game.config.height;
  }
  create() {
    this.bg = this.add.sprite(0, 0, ImageIdConstants.shopBgDefault);
    this.bg.setOrigin(0, 0);
    this.checkButton = this.add.sprite(
      this.width - 150,
      this.height - 150,
      ImageIdConstants.check
    );
    this.toolTip = this.add
      .text(200, 200, "Tooltip")
      .setDepth(2)
      .setActive(false)
      .setAlpha(0);
    this.checkButton.setScale(100 / 512, 100 / 512);
    this.checkButton.setOrigin(0, 0);
    this.checkButton.setInteractive({ cursor: "pointer" });
    this.checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start("city");
    });
  }
  invokeTooltip(): void;
  invokeTooltip(x?: number, y?: number, text?: string): void;
  invokeTooltip(x?: number, y?: number, text?: string): void {
    if (this.toolTip.active) {
      this.closeTooltip();
      return;
    }
    if (!!text && !!x && !!y) {
      this.toolTip.setActive(true);
      this.toolTip.alpha = 1;
      this.toolTip.setPosition(x, y);
      this.toolTip.setText(text);
    }
  }

  closeTooltip() {
    this.toolTip.setActive(false);
    this.toolTip.alpha = 0;
  }
}
