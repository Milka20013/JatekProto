class Enemy {
  stats: Stats = new Stats();
  initialHp: number;
  currentHp: number;
  givenMoney!: number;
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
      this.giveMoney();
      return true;
    }
    return false;
  }

  getMoneyAmount() {
    const max =
      (40 + Player.level * 8) *
      (1 + (Player.stats.getStatValue(StatName.char) - 1) * 0.15);
    const min =
      25 +
      Player.level *
        3 *
        (1 + (Player.stats.getStatValue(StatName.char) - 1) * 0.15);
    this.givenMoney = Math.round(Math.random() * (max - min) + min);
    return this.givenMoney;
  }
  giveMoney() {
    if (!!this.givenMoney) {
      Player.money += this.givenMoney;
    } else {
      Player.money += this.getMoneyAmount();
    }
  }

  static currentEnemy: Enemy;
}
