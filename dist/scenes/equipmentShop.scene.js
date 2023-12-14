"use strict";
/// <reference path="../types/index.d.ts" />
class EquipmentShopScene extends ShopScene {
    constructor(name) {
        super(name);
    }
    create() {
        super.create();
        this.bg.setTexture(ImageIdConstants.equipmentShopBg);
    }
}
//# sourceMappingURL=equipmentShop.scene.js.map