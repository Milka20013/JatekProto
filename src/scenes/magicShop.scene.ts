/// <reference path="../types/index.d.ts" />

class MagicShopScene extends ShopScene {
  constructor(name: string) {
    super(name);
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.notYetImplementedBg);
  }
}
