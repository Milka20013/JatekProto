/// <reference path="../types/index.d.ts" />

class EquipmentShopScene extends ShopScene {
  constructor(name: string) {
    super(name);
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.equipmentShopBg);
  }
}
