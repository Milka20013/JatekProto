class Enemy {
  stats: Stats = new Stats();
  initialHp: number;
  currentHp: number;
  constructor(statPoints: number) {
    this.stats.statPoints = statPoints;
    this.stats.randomizeStats();
    this.initialHp = 20 + this.stats.getStatValue(StatName.vit) * 5;
    this.currentHp = this.initialHp;
  }

  /**
   * Returns true if the hp is below 0
   *
   */
  registerDamage(dmg: number) {
    this.currentHp -= dmg;
    if (this.currentHp <= 0) {
      return true;
    }
    return false;
  }

  static currentEnemy: Enemy;
}
