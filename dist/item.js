"use strict";
var _a;
class Item {
    constructor(name, itemStats, cost) {
        this.itemStats = itemStats;
        this.cost = cost;
        this.name = name;
    }
    tooltip() {
        let str = "";
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
_a = Item;
Item.NullItem = new _a("Null", [{ statname: StatName.atk, value: 0 }], 0);
Item.BTierSword = new _a(ImageIdConstants.BtierSword, [
    { statname: StatName.atk, value: 1 },
    { statname: StatName.str, value: 2 },
], 100);
Item.STierSword = new _a(ImageIdConstants.StierSword, [
    { statname: StatName.atk, value: 1 },
    { statname: StatName.str, value: 3 },
], 350);
Item.GTierSword = new _a(ImageIdConstants.GtierSword, [
    { statname: StatName.atk, value: 2 },
    { statname: StatName.str, value: 5 },
], 1000);
Item.BTierArmor = new _a(ImageIdConstants.BtierArmor, [
    { statname: StatName.def, value: 1 },
    { statname: StatName.vit, value: 1 },
], 80);
Item.STierArmor = new _a(ImageIdConstants.StierArmor, [
    { statname: StatName.def, value: 3 },
    { statname: StatName.vit, value: 1 },
], 400);
Item.GTierArmor = new _a(ImageIdConstants.GtierArmor, [
    { statname: StatName.def, value: 4 },
    { statname: StatName.vit, value: 2 },
    { statname: StatName.atk, value: 1 },
], 1250);
Item.swords = [_a.BTierSword, _a.STierSword, _a.GTierSword];
Item.armors = [_a.BTierArmor, _a.STierArmor, _a.GTierArmor];
//# sourceMappingURL=item.js.map