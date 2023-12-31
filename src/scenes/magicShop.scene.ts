/// <reference path="../types/index.d.ts" />

class MagicShopScene extends BaseScene {
  constructor(name: string) {
    super(name);
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.magicShop);
  }
}
