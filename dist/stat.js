"use strict";
var StatName;
(function (StatName) {
    StatName["str"] = "str";
    StatName["atk"] = "atk";
    StatName["def"] = "def";
    StatName["vit"] = "vit";
    StatName["char"] = "char";
})(StatName || (StatName = {}));
class Stats {
    constructor(statPoints) {
        this.stats = [
            {
                name: StatName.str,
                value: 1,
                description: "+2 damage",
            },
            {
                name: StatName.atk,
                value: 1,
                description: "+ chance of attack success",
            },
            {
                name: StatName.def,
                value: 1,
                description: "+ chance of blocking success",
            },
            {
                name: StatName.vit,
                value: 1,
                description: "+5 health",
            },
            {
                name: StatName.char,
                value: 1,
                description: "More money after a win",
            },
        ];
        this.statPoints = 1;
        if (!!statPoints) {
            this.statPoints = statPoints;
        }
    }
    getStatValue(statName) {
        for (let i = 0; i < this.stats.length; i++) {
            if (this.stats[i].name === statName) {
                return this.stats[i].value;
            }
        }
        return -1;
    }
    /**
     * Returns the index of the stat that changed, -1 if it failed
     */
    increaseStat(stat) {
        if (this.statPoints <= 0) {
            return -1;
        }
        for (let i = 0; i < this.stats.length; i++) {
            if (stat == this.stats[i]) {
                stat.value += 1;
                this.statPoints -= 1;
                return i;
            }
        }
        return -1;
    }
    randomizeStats() {
        let num;
        for (let i = 0; i < this.statPoints; i++) {
            num = Math.floor(Math.random() * this.stats.length);
            this.stats[num].value++;
        }
        this.statPoints = 0;
    }
    applyItem(item) {
        for (let i = 0; i < item.itemStats.length; i++) {
            for (let j = 0; j < this.stats.length; j++) {
                if (this.stats[j].name == item.itemStats[i].statname) {
                    this.stats[j].value += item.itemStats[i].value;
                }
            }
        }
    }
    deApplyItem(item) {
        for (let i = 0; i < item.itemStats.length; i++) {
            for (let j = 0; j < this.stats.length; j++) {
                if (this.stats[j].name == item.itemStats[i].statname) {
                    this.stats[j].value -= item.itemStats[i].value;
                }
            }
        }
    }
    static calculateSuccessRate(attackerStat, defenderStat, attackMode) {
        let attack = attackerStat.getStatValue(StatName.atk);
        let def = defenderStat.getStatValue(StatName.def);
        return Math.min(Math.max((0.5 + (attack - def) / 10) / attackMode, 0.15), 0.95);
    }
    modifyStat(statname, value) {
        for (let i = 0; i < this.stats.length; i++) {
            if (this.stats[i].name == statname) {
                this.stats[i].value += value;
            }
        }
    }
    static calculateDamage(attackerStat, defenderStat, attackMode) {
        let attackDamageMultiplier = attackMode;
        let attackSucccesRate = Stats.calculateSuccessRate(attackerStat, defenderStat, attackMode);
        let num = Math.random();
        if (num > attackSucccesRate) {
            return 0;
        }
        let dmg = attackerStat.getStatValue(StatName.str) * 3 * attackDamageMultiplier;
        return Math.max(Math.round(dmg), 1);
    }
}
//# sourceMappingURL=stat.js.map