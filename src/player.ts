enum AttackMode {
  Light = 0.66,
  Medium = 1,
  Heavy = 1.5,
}
class Player {
  static level: number = 1;
  static stats: Stats = new Stats(10);
  static initialHp: number = 20;
  static currentHp: number = this.initialHp;
  private static wins: number = 0;

  /**
   * Returns true if the hp is below 0
   *
   */

  static increaseStat(stat: Stat) {
    let result = this.stats.increaseStat(stat);
    this.initialHp = 15 + this.stats.getStatValue(StatName.vit) * 5;
    this.currentHp = this.initialHp;
    return result;
  }
  static registerDamage(dmg: number) {
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
  }
  static die() {
    this.level = 1;
    this.stats = new Stats(10);
    this.initialHp = 20;
    this.currentHp = this.initialHp;
    this.wins = 0;
  }
}
