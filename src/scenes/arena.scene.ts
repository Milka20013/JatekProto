/// <reference path="../types/index.d.ts" />

class ArenaScene extends ShopScene {
  enemy!: Enemy;
  constructor(name: string) {
    super(name);
  }
  init(): void {
    this.enemy = Enemy.currentEnemy;
  }
  create() {
    super.create();
    this.bg.setTexture(ImageIdConstants.arenaBG);
    this.checkButton.destroy();

    const playerSprite = this.add.sprite(
      100,
      125,
      ImageIdConstants.playerSprite
    );
    playerSprite.setOrigin(0, 0);

    const enemySprite = this.add.sprite(625, 125, ImageIdConstants.check);
    enemySprite.setOrigin(0, 0);
  }

  playerAttack(attackMode: AttackMode) {
    let damage = Stats.calculateDamage(
      Player.stats,
      this.enemy.stats,
      attackMode
    );
    if (damage == 0) {
      //block
    } else {
      //hit enemy
    }
  }
}
