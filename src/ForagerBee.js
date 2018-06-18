var Grub = function() {
  this.age: 0,
  this.color: 'pink',
  this.food = 'jelly',
};

Grub.prototype.eat = function(){
  
}

var Bee = function() {
  Grub.call(this),
  this.age = 5,
  this.color = 'yellow',
  this.job = 'keep on growing'
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

var HoneyMakerBee = function() {
  Bee.call(this),
  this.age = 10,
  this.job = 'make honey',
  this.color = 'yellow',
  this.honeyPot = 0,

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.honeyPot = function(){
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
}

var ForagerBee = function() {
  Bee.call(this),
  this.age = 10,
  this.job = 'find pollen',
  this.color = 'yellow',
  this.canFly = true,
  this.treasureChest = []
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.forage = function(treasure){
  this.treasureChest.push(treasure);
}

