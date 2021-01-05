//This is the page where I create my fighters
const Fighter = require("./Fighter.js");
const Earthling = require("./Earthling.js");
const Outworlder = require("./Outworlder.js");

var Scorpion = new Fighter("Scorpion", "Harpoon", "Hellfire");

var SubZero = new Fighter("SubZero", "Kata", "Absolute Zero");

Scorpion.showStats();
SubZero.showStats();

var JohnnyCage = new Earthling("Johnny Cage", "Fists", "Shadow Kick");

JohnnyCage.showStats();

var Goro = new Outworlder("Goro", "4 arms", "Rips you apart", "space");

Goro.showStats();