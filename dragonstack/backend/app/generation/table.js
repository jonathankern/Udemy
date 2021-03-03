// used to hold any methods to interact with generation table

const pool = require('../../databasePool');

// collect related methods
class GenerationTable {
    // don't want to make an instance of GenerationTable, use static function and use directly
    static storeGeneration(generation) {
        // return a value within callback w/ js promise
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO generation(expiration) VALUES($1) RETURNING id', // INSERT to insert data into table, 1 index
                [generation.expiration],
                (error, response) => {
                    if (error) return reject(error);
    
                    const generationId = response.rows[0].id;
    
                    resolve({ generationId });
                }
            );
        });
    }
}

module.exports = GenerationTable;