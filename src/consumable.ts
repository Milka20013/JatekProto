class Consumable {
  name: string;
  shopIconName: string;
  ingameIconName: string;
  doEffect: (enemy?: Enemy) => void;
  cost: number;
  tooltip: string;

  private static nullConsumable: Consumable = {
    name: "Null",
    shopIconName: ImageIdConstants.potionItem,
    ingameIconName: ImageIdConstants.potionIcon,
    doEffect: () => {},
    cost: 0,
    tooltip: "",
  };
  private static healthPotion: Consumable = {
    name: "Health potion",
    shopIconName: ImageIdConstants.potionItem,
    ingameIconName: ImageIdConstants.potionIcon,
    doEffect: () => {
      Player.heal(Player.initialHp * 0.5);
      const index = Player.consumables.indexOf(this.healthPotion);
      Player.consumables[index] = this.nullConsumable;
    },
    cost: 100,
    tooltip: "50% health heal",
  };
  private static shield: Consumable = {
    name: "Shield",
    shopIconName: ImageIdConstants.shieldShopItem,
    ingameIconName: ImageIdConstants.shieldIcon,
    doEffect: (enemy) => {
      enemy?.stats.modifyStat(StatName.atk, -2);
      const index = Player.consumables.indexOf(this.shield);
      Player.consumables[index] = this.nullConsumable;
    },
    cost: 200,
    tooltip: "Enemies misses more!",
  };

  static Consumables: Consumable[] = [this.healthPotion, this.shield];
  constructor(
    name: string,
    effect: () => void,
    cost: number,
    shopIconName: string,
    ingameIconName: string,
    tooltip: string
  ) {
    this.name = name;
    this.doEffect = effect;
    this.cost = cost;
    this.shopIconName = shopIconName;
    this.ingameIconName = ingameIconName;
    this.tooltip = tooltip;
  }
}
