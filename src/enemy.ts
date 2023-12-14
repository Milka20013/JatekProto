class Enemy {
  stats: Stats = new Stats();

  constructor(statPoints: number) {
    this.stats.statPoints = statPoints;
    this.stats.randomizeStats();
  }

  static currentEnemy: Enemy;
}
