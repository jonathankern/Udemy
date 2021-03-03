// used to hold any methods to interact with generation table

const pool = require('../../databasePool');

// collect related methods
class GenerationTable {
    // don't want to make an instance of GenerationTable, use static function and use directly
    static storeGeneration(generation) {
        pool.query(
            'INSERT INTO generation(expiration) VALUES($1)', // INSERT to insert data into table, 1 index
            [generation.expiration],
            (error, response) => {
                if (error) return console.error(error);
            }
        );
    }
}

module.exports = GenerationTable;