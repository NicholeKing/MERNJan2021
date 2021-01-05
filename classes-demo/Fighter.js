class Fighter {
    constructor(name, weap, fatal){
        this.name = name;
        this.health = 100;
        this.weapon = weap;
        this.fatality = fatal;
    }

    showStats(){
        console.log("***************");
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Weapon: " + this.weapon);
        console.log("Fatality: " + this.fatality);
        
    }
}

module.exports = Fighter;