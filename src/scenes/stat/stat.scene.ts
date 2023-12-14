/// <reference path="../../types/index.d.ts" />

class StatScene extends Phaser.Scene {
  width: number = 0;
  height: number = 0;
  // ! to shut up the compiler
  statPointValueText!: Phaser.GameObjects.Text;
  statValueTexts: Phaser.GameObjects.Text[] = [];
  constructor(name: string) {
    super(name);
  }
  init() {
    this.width = +this.sys.game.config.width;
    this.height = +this.sys.game.config.height;
  }

  create() {
    this.statValueTexts = [];
    const bg = this.add.rectangle(0, 0, this.width, this.height, 0xd7e5fc);
    bg.setOrigin(0, 0);

    const panel = this.add.sprite(
      this.width * 0.1,
      this.height * 0.1,
      ImageIdConstants.panel
    );
    panel.setOrigin(0, 0);

    //create the ui inside the panel
    const plusButtons = this.add.group();
    for (let i = 0; i < Player.stats.stats.length; i++) {
      const plusButton: Phaser.GameObjects.Sprite = plusButtons.create(
        panel.x + panel.width - 75,
        panel.y + 25 + i * 125,
        ImageIdConstants.plus
      );
      plusButton.setOrigin(0, 0);
      plusButton.setScale(50 / 512, 50 / 512);
      plusButton.setInteractive({ cursor: "pointer" });
      plusButton.on(Phaser.Input.Events.POINTER_OVER, () => {
        plusButton.setTintFill(0x0a6e49);
      });
      plusButton.on(Phaser.Input.Events.POINTER_OUT, () => {
        plusButton.setTintFill(0);
      });
      plusButton.on(Phaser.Input.Events.POINTER_DOWN, () =>
        this.increaseStat(Player.stats.stats[i])
      );
      //the y value is not quite in line with the buttons
      const statNameText = this.add.text(
        plusButton.x - panel.width + plusButton.width * plusButton.scale * 2,
        plusButton.y + 5,
        Player.stats.stats[i].name + "",
        { fontSize: "40px" }
      );
      const statValueText = this.add.text(
        statNameText.x + panel.width / 2,
        statNameText.y,
        "" + Player.stats.stats[i].value,
        { fontSize: "40px" }
      );
      this.statValueTexts.push(statValueText);
    }
    this.statPointValueText = this.add.text(
      900,
      400,
      "" + Player.stats.statPoints,
      {
        fontSize: "40px",
      }
    );
    const statPointText = this.add.text(
      this.statPointValueText.x,
      this.statPointValueText.y - 40,
      "Available stat point(s)",
      { fontSize: "40px" }
    );
    statPointText.setOrigin(0.5, 0.5);
    const checkButton = this.add.sprite(
      this.width - 150,
      this.height - 150,
      ImageIdConstants.check
    );
    checkButton.setScale(100 / 512, 100 / 512);
    checkButton.setOrigin(0, 0);
    checkButton.setInteractive({ cursor: "pointer" });
    checkButton.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start("city");
    });
    //this.scene.start("arena");
  }
  increaseStat(stat: Stat): void {
    const result = Player.increaseStat(stat);
    if (result == -1) {
      return;
    }
    this.statValueTexts[result].text = "" + stat.value;
    this.statPointValueText.text = "" + Player.stats.statPoints;
  }
}
