"use strict";
var _a;
class Consumable {
    constructor(name, effect, cost, shopIconName, ingameIconName, tooltip) {
        this.name = name;
        this.doEffect = effect;
        this.cost = cost;
        this.shopIconName = shopIconName;
        this.ingameIconName = ingameIconName;
        this.tooltip = tooltip;
    }
}
_a = Consumable;
Consumable.healthPotion = {
    name: "Health potion",
    shopIconName: ImageIdConstants.potionItem,
    ingameIconName: ImageIdConstants.potionIcon,
    doEffect: () => {
        Player.heal(Player.initialHp * 0.5);
        const index = Player.consumables.indexOf(_a.healthPotion);
        Player.consumables.splice(index, 1);
    },
    cost: 100,
    tooltip: "50% health heal",
};
Consumable.shield = {
    name: "Shield",
    shopIconName: ImageIdConstants.shieldShopItem,
    ingameIconName: ImageIdConstants.shieldIcon,
    doEffect: (enemy) => {
        enemy === null || enemy === void 0 ? void 0 : enemy.stats.modifyStat(StatName.atk, -2);
        const index = Player.consumables.indexOf(_a.shield);
        Player.consumables.splice(index, 1);
    },
    cost: 200,
    tooltip: "Enemies misses more!",
};
Consumable.Consumables = [_a.healthPotion, _a.shield];
//# sourceMappingURL=consumable.js.map