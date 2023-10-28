interface Stat {
  name: string;
  value: number;
}

class Stats {
  static stats: Stat[] = [
    {
      name: "str",
      value: 1,
    },
    {
      name: "atk",
      value: 1,
    },
    {
      name: "def",
      value: 1,
    },
    {
      name: "vit",
      value: 1,
    },
    {
      name: "char",
      value: 1,
    },
  ];
  static statPoints: number = 1;

  /**
   * Returns the index of the stat that changed, -1 if it failed
   */
  static increaseStat(stat: Stat): number {
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
}
