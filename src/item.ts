interface ItemStats {
  statname: StatName;
  value: number;
}

class Item {
  static NullItem = new Item("Null", [{ statname: StatName.atk, value: 0 }], 0);
  private static BTierSword = new Item(
    ImageIdConstants.BtierSword,
    [
      { statname: StatName.atk, value: 1 },
      { statname: StatName.str, value: 2 },
    ],
    100
  );
  private static STierSword = new Item(
    ImageIdConstants.StierSword,
    [
      { statname: StatName.atk, value: 1 },
      { statname: StatName.str, value: 3 },
    ],
    350
  );
  private static GTierSword = new Item(
    ImageIdConstants.GtierSword,
    [
      { statname: StatName.atk, value: 2 },
      { statname: StatName.str, value: 5 },
    ],
    1000
  );

  private static BTierArmor = new Item(
    ImageIdConstants.BtierArmor,
    [
      { statname: StatName.def, value: 1 },
      { statname: StatName.vit, value: 1 },
    ],
    80
  );
  private static STierArmor = new Item(
    ImageIdConstants.StierArmor,
    [
      { statname: StatName.def, value: 3 },
      { statname: StatName.vit, value: 1 },
    ],
    400
  );
  private static GTierArmor = new Item(
    ImageIdConstants.GtierArmor,
    [
      { statname: StatName.def, value: 4 },
      { statname: StatName.vit, value: 2 },
      { statname: StatName.atk, value: 1 },
    ],
    1250
  );
  static swords: Item[] = [this.BTierSword, this.STierSword, this.GTierSword];
  static armors: Item[] = [this.BTierArmor, this.STierArmor, this.GTierArmor];

  name: string;
  itemStats: ItemStats[];
  cost: number;
  constructor(name: string, itemStats: ItemStats[], cost: number) {
    this.itemStats = itemStats;
    this.cost = cost;
    this.name = name;
  }

  tooltip(): string {
    let str: string = "";
    for (let i = 0; i < this.itemStats.length; i++) {
      str +=
        StatName[this.itemStats[i].statname] +
        " " +
        this.itemStats[i].value +
        " ";
    }
    return str;
  }
}
