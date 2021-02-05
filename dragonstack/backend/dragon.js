// use scream case that don't change values for the application
const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    get birthdate() { // getter method will run new date at time of execution
        return new Date()
    }
}; 

class Dragon {
    // accept incoming object with "birthdate" and "nickname" keys
    constructor({ birthdate, nickname } = {}) { // set to empty object in case no properties provided
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate; // use defaults if no values provide
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    }
}

module.exports = Dragon; // Export to be available in other files