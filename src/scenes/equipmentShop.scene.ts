/// <reference path="../types/index.d.ts" />

class EquipmentShopScene extends ShopScene {
  infoText!: Phaser.GameObjects.Text;
  moneyText!: Phaser.GameObjects.Text;
  constructor(name: string) {
    super(name);
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.equipmentShopBg);
    this.infoText = this.add.text(60, 100, "Hello!");
    this.moneyText = this.add.text(
      60,
      600,
      "You have " + Player.money + " Gold"
    );
    for (let i = 0; i < Item.swords.length; i++) {
      const button = this.add
        .sprite(150 + 125 * i, 400, Item.swords[i].name)
        .setOrigin(0, 0)
        .setScale(100 / 512, 100 / 512)
        .setInteractive({ cursor: "pointer" })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          if (Player.sword.cost < Item.swords[i].cost) {
            const result = Player.buySword(Item.swords[i]);
            if (result) {
              this.infoText.text = "You bought " + Item.swords[i].name + " !";
            } else {
              this.infoText.text = "Not enough Gold :(";
            }
          } else {
            this.infoText.text = "You don't need this!";
          }
          this.updateMoneyText();
        });
      const costText = this.add.text(
        button.x,
        button.y + 100,
        Item.swords[i].cost.toString()
      );
    }
    for (let i = 0; i < Item.armors.length; i++) {
      const button = this.add
        .sprite(
          150 + Item.swords.length * 150 + 125 * i,
          400,
          Item.armors[i].name
        )
        .setOrigin(0, 0)
        .setScale(100 / 512, 100 / 512)
        .setInteractive({ cursor: "pointer" })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          if (Player.armor.cost < Item.armors[i].cost) {
            const result = Player.buyArmor(Item.armors[i]);
            if (result) {
              this.infoText.text = "You bought " + Item.armors[i].name + " !";
            } else {
              this.infoText.text = "Not enough Gold :(";
            }
          } else {
            this.infoText.text = "You don't need this!";
          }
          this.updateMoneyText();
        });
      const costText = this.add.text(
        button.x,
        button.y + 100,
        Item.armors[i].cost.toString()
      );
    }
  }

  updateMoneyText() {
    this.moneyText.text = "You have " + Player.money + " Gold";
  }
}
