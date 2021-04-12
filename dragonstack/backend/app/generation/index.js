const Dragon = require('../dragon/index.js');
const { REFRESH_RATE, SECONDS } = require('../config');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
    // keep constructor as clean as possible
    constructor() {
        // self contained in generation object itself
        this.expiration = this.calculateExpiration(); 
        // will need to set id to the value that postresql determines for the next generation when it gets inserted
        this.generationID = undefined; 
    }

    // helper function, calculation algorithm can later become more complex
    calculateExpiration() {
        const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

        // we either want the expiration period 50% longer or 50% shorter
        const msUntilExpiration = Math.random() < 0.5 ?
            refreshRate - expirationPeriod : 
            refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon() {
        if (Date.now() > this.expiration) {
            throw new Error(`This generation expired on ${this.expiration}`);
        }

        return new Dragon({ generationId: this.generationId });
    }
}

module.exports = Generation; // export class to make available to other files