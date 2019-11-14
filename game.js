var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Acadamey Z', { preload: preload, create: create, update: update });
var ground

function preload() {
  game.load.image('BG', 'assets/Background.png');
  game.load.image('Z1', 'assets/Zombie.png');
  game.load.image('Z2', 'assets/Zombie 2.png');
  game.load.image('Z3', 'assets/Zombie 3.png');
  game.load.image('Z4', 'assets/Zombie 4.png');
  game.load.image('Z5', 'assets/Zombie 5.png');
  game.load.image('STEEL', 'assets/STEEL.png');
  game.load.image('BBT STEEL', 'assets/STEEL BIG.png');
  game.load.image('ground', 'assets/platforms.png')

}

function create() {
 game.physics.startSystem(Phaser.Physics.ARCADE);
  platforms = game.add.group();
  platforms.enableBody = true;
  game.add.sprite(0,0 , 'BG');

  button = game.add.button(game.world.centerX, game.world.centerY, 'button');
  button.onInputUp.add(myFunction);

  button = game.add.button(game.world.centerX, game.world.centerY, 'button');
button.anchor.setTo(0.5,0.5);
button.onInputUp.add(myFunction);
var text = game.add.text(button.x,button.y,'Start');
text.anchor.setTo(0.5,0.5);




}

function update() {
}
