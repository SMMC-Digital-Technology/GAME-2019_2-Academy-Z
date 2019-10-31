var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Acadamey Z', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('BG', 'assets/Background.png');
}

function create() {game.add.sprite(0, 0, 'BG');
}

function update() {
}
