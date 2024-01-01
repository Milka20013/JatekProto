/// <reference path="../types/index.d.ts" />

class MagicShopScene extends BaseScene {
  moneyText!: Phaser.GameObjects.Text;
  constructor(name: string) {
    super(name);
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.magicShop);

    this.moneyText = this.add.text(
      60,
      600,
      "You have " + Player.money + " Gold"
    );
    for (let i = 0; i < Consumable.Consumables.length; i++) {
      const button = this.add
        .sprite(150 + 125 * i, 400, Consumable.Consumables[i].shopIconName)
        .setOrigin(0, 0)
        .setScale(100 / 512, 100 / 512)
        .setInteractive({ cursor: "pointer" })
        .on(Phaser.Input.Events.POINTER_OUT, () => {
          this.closeTooltip();
        })
        .on(Phaser.Input.Events.POINTER_OVER, () => {
          this.invokeTooltip(
            150 + 125 * i,
            375,
            Consumable.Consumables[i].tooltip
          );
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          const result = Player.buyConsumable(Consumable.Consumables[i]);
          this.infoText.text = result;
          this.updateMoneyText();
        });
      const costText = this.add.text(
        button.x,
        button.y + 100,
        Consumable.Consumables[i].cost.toString()
      );
    }
  }
  updateMoneyText() {
    this.moneyText.text = "You have " + Player.money + " Gold";
  }
}
