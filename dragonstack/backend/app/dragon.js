// use scream case that don't change values for the application

const TRAITS = require ('../data/traits.json');

const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    get birthdate() { // getter method will run new date at time of execution
        return new Date()
    },
    get randomTraits() {
        const traits = []; // setter, set to array

        // every trait, we are going to set it to our own type and values
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            // pick random trait from the value array that we're getting from individual trait object
            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ]

            // push object to "traits" array
            traits.push({ traitType, traitValue })
        });

        return traits; // return the traits that have been built as part of the get randomTraits computed property
    }
}; 

class Dragon {
    // accept incoming object with "birthdate" and "nickname" keys
    constructor({ birthdate, nickname, traits } = {}) { // set to empty object in case no properties provided
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate; // use defaults if no values provide
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon; // Export to be available in other files