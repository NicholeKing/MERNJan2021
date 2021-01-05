const Fighter = require("./Fighter.js");

class Outworlder extends Fighter{
    constructor(name, weap, fatal, origin){
        super(name, weap, fatal);
        this.health = 120;
        this.origin = origin;
    }

    showStats(){
        super.showStats();
        console.log("Origin: " + this.origin);
    }
}

module.exports = Outworlder;