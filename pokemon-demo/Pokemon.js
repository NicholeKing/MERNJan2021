const Card = require("./Card.js");

class Pokemon extends Card{
    constructor(name, power, HP, type, weakness, resistance){
        super(name, power)
        this.HP = HP;
        this.type = type;
        this.weakness = weakness;
        this.resistance = resistance;
    }

    attack(target){
        var damage = this.power;
        //If move was super effective, multiple damage by 2 and apply to target health
        if (target.weakness == this.type){
            damage *= 2;
            target.HP -= damage;
        } else if (target.resistance == this.type) {
            //Else if the pokemon is reistance to an attack, divide power by half
            damage /= 2;
            //Our pokemon attacks its target and reduces its health by its power amount
            target.HP -= damage;
        } else {
            target.HP -= damage;
        }
        //Console log the results
        console.log(`${target.name} took ${damage} damage and is left with ${target.HP} health!`);
    }
}

module.exports = Pokemon;