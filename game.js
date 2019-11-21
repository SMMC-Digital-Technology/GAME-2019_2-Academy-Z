var game = new Phaser.Game(800,600, Phaser.CANVAS, 'theGame', { preload: preload, create: create, update: update });


function preload() {
  game.load.spritesheet('back', 'assets/back.png')
  game.load.image('Z1', 'assets/Zombie.png');
  game.load.image('Z2', 'assets/Zombie 2.png');
  game.load.image('Z3', 'assets/Zombie 3.png');
  game.load.image('Z4', 'assets/Zombie 4.png');
  game.load.image('Z5', 'assets/Zombie 5.png');
  game.load.image('STEEL', 'assets/STEEL.png');
  game.load.image('Button', 'assets/Button.png');

}

function create() {
 game.physics.startSystem(Phaser.Physics.ARCADE);





  button = game.add.button(game.world.centerX, game.world.centerY, 'Button', actionOnClick, this, 2, 1, 0);
button.anchor.setTo(0.5,0.5);
var text = game.add.text(button.x,button.y,'Start');
text.anchor.setTo(0.5,0.5);

}


function update() {

}

function actionOnClick () {



}
