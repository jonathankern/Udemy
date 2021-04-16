const Generation = require('./index');
const GenerationTable = require('./table');

// The engine will need to create a new generation object when the previous one has expired
class GenerationEngine {
    constructor() {
       
        this.generation = null;
        this.timer = null;
    }

    start() {
        this.buildNewGeneration();
    }

    // remove timeout
    stop() {
        clearTimeout(this.timer);
    }

    // A `newGeneration` method could come in handy. This would make a generation object, setting it to `this.generation`
    buildNewGeneration() {
        const generation = new Generation();

        GenerationTable.storeGeneration(generation)
            .then(({ generationId }) => {
                // Keep track of current generation using `this.generation` in the class
                this.generation = generation;
                
                // set this generationID to incoming generationID that we have from the promise
                this.generation.generationID = generationId;
                
                console.log('new generation', this.generation);

                // Consider using `setTimeout` to schedule calls to `newGeneration` in a timely manner
                // It will recursively call itself when the generation has expiration
                this.timer = setTimeout(
                    () => this.buildNewGeneration(),
                    this.generation.expiration.getTime() - Date.now() // number of ms between when the current generation would expire and the current time
                ); 
            })
            .catch(error => console.error(error));
    }
}

module.exports = GenerationEngine;