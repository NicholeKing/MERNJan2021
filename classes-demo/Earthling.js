const Fighter = require("./Fighter.js");

class Earthling extends Fighter{
    constructor(name, weap, fatal){
        super(name, weap, fatal);
        this.origin = "Earth";
    }

    showStats(){
        super.showStats();
        console.log("Origin: " + this.origin);
    }
}

module.exports = Earthling;