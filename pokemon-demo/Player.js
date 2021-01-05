class Player {
    constructor(){
        this.hand = [];
    }

    addToHand(target){
        this.hand.push(target);
    }

    playCard(target){
        for(let i = 0; i < this.hand.length; i++){
            if (this.hand[i].name == target.name) {
                var card = this.hand[i];
                this.hand.splice(i, 1);
            }
        }
        return card;
    }
}

module.exports = Player;