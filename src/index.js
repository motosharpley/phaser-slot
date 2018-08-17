import 'phaser';

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('logo', 'assets/devpathlogo.png');
  this.load.image('emoj', 'assets/emoj-1.png');
  this.load.image('pac', 'assets/pac-emoj-2.png');
  this.load.image('block', 'assets/block-emoj-3.png');
}

function create() {
  var logo = this.add.image(1100, 150, 'logo');
  var pac = this.add.image(475, 150, 'pac');
  var emoj = this.add.image(150, 150, 'emoj');
  var block = this.add.image(800, 150, 'block');

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });

  this.tweens.add({
    targets: pac,
    y: 450,
    duration: 1500,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });

  this.tweens.add({
    targets: emoj,
    y: 450,
    duration: 1000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });

  this.tweens.add({
    targets: block,
    y: 450,
    duration: 2500,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });

}