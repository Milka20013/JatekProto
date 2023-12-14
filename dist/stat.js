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
            },
            {
                name: StatName.atk,
                value: 1,
            },
            {
                name: StatName.def,
                value: 1,
            },
            {
                name: StatName.vit,
                value: 1,
            },
            {
                name: StatName.char,
                value: 1,
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
    static calculateSuccessRate(attackerStat, defenderStat, attackMode) {
        let attack = attackerStat.getStatValue(StatName.atk);
        let def = defenderStat.getStatValue(StatName.def);
        let attackModePoints = 0;
        switch (attackMode) {
            case AttackMode.light:
                attackModePoints = 3;
                break;
            case AttackMode.medium:
                attackModePoints = 0;
                break;
            case AttackMode.heavy:
                attackModePoints = -3;
                break;
            default:
                break;
        }
        return (Math.min(Math.sqrt(Math.max(attack + attackModePoints - def, 4)), 3.8) *
            0.25);
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