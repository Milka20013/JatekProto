/// <reference path="./types/index.d.ts" />

const loadingScene = new LoadingScene("loading");
const homeScene = new HomeScene("home");
const statScene = new StatScene("stat");
const cityScene = new CityScene("city");
const equipmentShopScene = new EquipmentShopScene("equipmentShop");
const magicShopScene = new MagicShopScene("magicShop");
const arenaScene = new ArenaScene("arena");
const game = new Phaser.Game({
  width: 1280,
  height: 720,
  scene: [
    loadingScene,
    homeScene,
    statScene,
    cityScene,
    equipmentShopScene,
    magicShopScene,
    arenaScene,
  ],
  type: Phaser.AUTO,
});
