class Mine {
    constructor(totalCoins){
        this.totalCoins = totalCoins;
    }

    extractCoins = (amount) {
        if(this.totalCoins >= amount){
            this.totalCoins -= amount;
            return amount;
        } else {
            const coinsLeft = this.totalCoins;
    
        }
    }

}