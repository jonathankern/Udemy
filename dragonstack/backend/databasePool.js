const { Pool } = require('pg'); // need curly brackets around Pool class because it's not a default export of pg module
const databaseConfiguration = require('./secrets/databaseConfiguration'); // hide sensitive data and put in secrets/databaseConfiguration

const pool = new Pool(databaseConfiguration); // primary way of interacting with postgres db

module.exports = pool;

// DEBUG (string represents sql to retrieve from or insert data into a data, callback function with error and response object) 
// pool.query('SELECT * FROM generation', (error, response) => {
//     if (error) return console.log('error', error);

//     console.log('response.rows', response.rows);
// });