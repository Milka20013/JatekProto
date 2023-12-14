"use strict";
class Enemy {
    constructor(statPoints) {
        this.stats = new Stats();
        this.stats.statPoints = statPoints;
        this.stats.randomizeStats();
        this.initialHp = 20 + this.stats.getStatValue(StatName.vit) * 5;
        this.currentHp = this.initialHp;
    }
    /**
     * Returns true if the hp is below 0
     *
     */
    registerDamage(dmg) {
        this.currentHp -= dmg;
        if (this.currentHp <= 0) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=enemy.js.map