/// <reference path="./types/index.d.ts" />

const loadingScene = new LoadingScene("loading");
const homeScene = new HomeScene("home");
const statScene = new StatScene("stat");
const villageScene = new VillageScene("village");

const game = new Phaser.Game({
  width: 1280,
  height: 720,
  scene: [loadingScene, homeScene, statScene, villageScene],
  type: Phaser.AUTO,
});
