const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");
const Player = require("./Player.js");

const Charmander = new Pokemon("Charmander", 10, 50, "Fire", "Water", "Grass");

const Bulbasaur = new Pokemon("Bulbasaur", 20, 40, "Grass", "Fire", "None");

const Potion = new Trainer("Potion", 20, "Removes 20 damage from 1 Pokemon", "HP");

// Charmander.attack(Bulbasaur);
// Potion.apply_affect(Bulbasaur);
// console.log(Bulbasaur);
// Bulbasaur.attack(Charmander);

const p1 = new Player();
p1.addToHand(Charmander);
p1.addToHand(Potion);
var play = p1.playCard(Charmander);
console.log(p1.hand);
console.log(play);