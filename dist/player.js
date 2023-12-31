"use strict";
var _a;
var AttackMode;
(function (AttackMode) {
    AttackMode[AttackMode["Light"] = 0.66] = "Light";
    AttackMode[AttackMode["Medium"] = 1] = "Medium";
    AttackMode[AttackMode["Heavy"] = 1.5] = "Heavy";
})(AttackMode || (AttackMode = {}));
class Player {
    /**
     * Returns true if the hp is below 0
     *
     */
    static increaseStat(stat) {
        let result = this.stats.increaseStat(stat);
        this.initialHp = 15 + this.stats.getStatValue(StatName.vit) * 5;
        this.currentHp = this.initialHp;
        return result;
    }
    static registerDamage(dmg) {
        this.currentHp -= dmg;
        if (this.currentHp <= 0) {
            return true;
        }
        return false;
    }
    /**
     * Returns true if player levelled up
     *
     */
    static win() {
        this.wins++;
        let previousLevel = this.level;
        this.level = Math.floor(this.wins / 2) + 1;
        if (previousLevel < this.level) {
            this.stats.statPoints += 2;
            return true;
        }
        return false;
    }
    static reset() {
        this.currentHp = this.initialHp;
        this.consumables = this.consumables.filter((x) => x.name != "Null");
    }
    static heal(amount) {
        this.currentHp += amount;
        this.currentHp = Math.min(this.currentHp, this.initialHp);
    }
    static die() {
        this.level = 1;
        this.stats = new Stats(10);
        this.initialHp = 20;
        this.currentHp = this.initialHp;
        this.money = 250;
        this.wins = 0;
        this.armor = Item.NullItem;
        this.sword = Item.NullItem;
        this.consumables = [];
    }
    static buySword(sword) {
        if (this.money >= sword.cost) {
            this.swapSwords(sword);
            this.money -= sword.cost;
            return true;
        }
        return false;
    }
    static swapSwords(sword) {
        this.stats.deApplyItem(this.sword);
        this.sword = sword;
        this.stats.applyItem(this.sword);
    }
    static buyArmor(armor) {
        if (this.money >= armor.cost) {
            this.swapArmors(armor);
            this.money -= armor.cost;
            return true;
        }
        return false;
    }
    static swapArmors(armor) {
        this.stats.deApplyItem(this.armor);
        this.armor = armor;
        this.stats.applyItem(this.armor);
    }
    static buyConsumable(consumable) {
        if (this.consumables.length >= 2) {
            return "Too many consumables";
        }
        if (this.money >= consumable.cost) {
            this.money -= consumable.cost;
            this.consumables.push(consumable);
            return "You bought " + consumable.name;
        }
        return "Not enough money :(";
    }
}
_a = Player;
Player.level = 1;
Player.stats = new Stats(10);
Player.initialHp = 20;
Player.currentHp = _a.initialHp;
Player.money = 250;
Player.consumables = [];
Player.wins = 0;
//# sourceMappingURL=player.js.map