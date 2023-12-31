"use strict";
/// <reference path="../types/index.d.ts" />
class ArenaScene extends BaseScene {
    constructor(name) {
        super(name);
        this.canDoAction = true;
    }
    init() {
        this.enemy = Enemy.currentEnemy;
    }
    create() {
        super.create();
        this.bg.setTexture(ImageIdConstants.arenaBG);
        this.checkButton.destroy();
        this.canDoAction = true;
        this.toolTip = this.add
            .text(200, 200, "Tooltip")
            .setDepth(2)
            .setActive(false)
            .setAlpha(0);
        this.playerSprite = this.add.sprite(250, 400, ImageIdConstants.playerSprite);
        this.playerSprite.setOrigin(0, 0);
        this.enemySprite = this.add.sprite(625, 400, ImageIdConstants.enemySprite);
        this.enemySprite.setOrigin(0, 0);
        const playerHealthBorder = this.add.sprite(100, 500, ImageIdConstants.healthBar);
        playerHealthBorder.setOrigin(0, 0);
        playerHealthBorder.setDepth(1);
        this.playerHealthBar = this.add.rectangle(100, 500, 200, 70, 0x990024);
        this.playerHealthBar.setOrigin(0, 0);
        this.playerHealthText = this.add
            .text(0, 0, Player.currentHp.toString())
            .setDepth(2);
        this.enemyHealthText = this.add
            .text(0, 0, this.enemy.currentHp.toString())
            .setDepth(2);
        Phaser.Display.Align.In.Center(this.playerHealthText, playerHealthBorder);
        Phaser.Display.Align.In.Center(this.playerHealthBar, playerHealthBorder);
        const playerArmorBorder = this.add.sprite(100, 600, ImageIdConstants.healthBar);
        playerArmorBorder.setOrigin(0, 0);
        const enemyHealthBorder = this.add.sprite(900, 500, ImageIdConstants.healthBar);
        enemyHealthBorder.setFlipX(true);
        enemyHealthBorder.setOrigin(0, 0);
        enemyHealthBorder.setDepth(1);
        this.enemyHealthBar = this.add.rectangle(100, 500, 200, 70, 0x990024);
        this.enemyHealthBar.setOrigin(0, 0);
        Phaser.Display.Align.In.Center(this.enemyHealthText, enemyHealthBorder);
        Phaser.Display.Align.In.Center(this.enemyHealthBar, enemyHealthBorder);
        const enemyArmorBorder = this.add.sprite(900, 600, ImageIdConstants.healthBar);
        enemyArmorBorder.setOrigin(0, 0);
        enemyArmorBorder.setFlipX(true);
        const attackLightButton = this.add
            .sprite(550, 600, ImageIdConstants.attackLightSprite)
            .setInteractive({ cursor: "pointer" });
        attackLightButton.setOrigin(0, 0);
        attackLightButton
            .setScale(75 / 512, 75 / 512)
            .on(Phaser.Input.Events.POINTER_OUT, () => {
            this.closeTooltip();
        })
            .on(Phaser.Input.Events.POINTER_OVER, () => {
            this.invokeTooltip(550, 600, "" +
                Math.round(this.getAttackSuccessRate(AttackMode.Light) * 100) +
                "%");
        })
            .on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.playerAttack(AttackMode.Light);
        });
        const attackMediumButton = this.add
            .sprite(550, 500, ImageIdConstants.attackMediumSprite)
            .setInteractive({ cursor: "pointer" });
        attackMediumButton.setOrigin(0, 0);
        attackMediumButton.setScale(75 / 512, 75 / 512);
        attackMediumButton
            .on(Phaser.Input.Events.POINTER_OUT, () => {
            this.closeTooltip();
        })
            .on(Phaser.Input.Events.POINTER_OVER, () => {
            this.invokeTooltip(550, 500, "" +
                Math.round(this.getAttackSuccessRate(AttackMode.Medium) * 100) +
                "%");
        })
            .on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.playerAttack(AttackMode.Medium);
        });
        const attackHeavyButton = this.add
            .sprite(550, 400, ImageIdConstants.attackHeavySprite)
            .setInteractive({ cursor: "pointer" });
        attackHeavyButton.setOrigin(0, 0);
        attackHeavyButton.setScale(75 / 512, 75 / 512);
        attackHeavyButton
            .on(Phaser.Input.Events.POINTER_OUT, () => {
            this.closeTooltip();
        })
            .on(Phaser.Input.Events.POINTER_OVER, () => {
            this.invokeTooltip(550, 400, "" +
                Math.round(this.getAttackSuccessRate(AttackMode.Heavy) * 100) +
                "%");
        })
            .on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.playerAttack(AttackMode.Heavy);
        });
        this.playerActionText = this.add.text(100, 150, "Player action");
        this.enemyActionText = this.add.text(900, 150, "Enemy action");
    }
    getAttackSuccessRate(attackMode) {
        return Stats.calculateSuccessRate(Player.stats, this.enemy.stats, attackMode);
    }
    playerAttack(attackMode) {
        if (!this.canDoAction) {
            return;
        }
        this.canDoAction = false;
        let damage = Stats.calculateDamage(Player.stats, this.enemy.stats, attackMode);
        this.playerActionText.text =
            "Player " + AttackMode[attackMode] + " attack does " + damage + " damage";
        if (damage == 0) {
            this.tweens.add({
                targets: this.playerSprite,
                duration: 100,
                x: 260,
                y: 400,
                yoyo: true,
                onComplete: () => {
                    this.enemyTurn();
                },
            });
        }
        else {
            this.tweens.add({
                targets: this.playerSprite,
                duration: 500,
                x: 300,
                y: 390,
                yoyo: true,
                onComplete: () => {
                    let dead = this.enemy.registerDamage(damage);
                    if (dead) {
                        let levelledUp = Player.win();
                        if (levelledUp) {
                            this.scene.start("stat");
                        }
                        else {
                            this.scene.start("city");
                        }
                        Player.reset();
                        return;
                    }
                    this.enemyHealthBar.setScale(this.enemy.currentHp / this.enemy.initialHp, 1);
                    this.enemyHealthText.text = this.enemy.currentHp.toString();
                    this.enemyTurn();
                },
            });
        }
        //this.enemyTurn();
    }
    enemyTurn() {
        this.canDoAction = false;
        let num = Math.floor(Math.random() * 3);
        let attackMode = AttackMode.Light;
        if (num == 1) {
            attackMode = AttackMode.Medium;
        }
        if (num == 2) {
            attackMode = AttackMode.Heavy;
        }
        this.enemyAttack(attackMode);
    }
    enemyAttack(attackMode) {
        let damage = Stats.calculateDamage(this.enemy.stats, Player.stats, attackMode);
        this.enemyActionText.text =
            "Enemy " + AttackMode[attackMode] + " attack does " + damage + " damage";
        if (damage == 0) {
            this.tweens.add({
                targets: this.enemySprite,
                duration: 100,
                x: 615,
                y: 400,
                yoyo: true,
                onComplete: () => {
                    this.playerTurn();
                },
            });
        }
        else {
            this.tweens.add({
                targets: this.enemySprite,
                duration: 500,
                x: 575,
                y: 390,
                yoyo: true,
                onComplete: () => {
                    let dead = Player.registerDamage(damage);
                    if (dead) {
                        Player.die();
                        this.scene.start("stat");
                        return;
                    }
                    this.playerHealthBar.setScale(Player.currentHp / Player.initialHp, 1);
                    this.playerHealthText.text = Player.currentHp.toString();
                    this.playerTurn();
                },
            });
        }
        //this.playerTurn();
    }
    playerTurn() {
        this.canDoAction = true;
    }
}
//# sourceMappingURL=arena.scene.js.map