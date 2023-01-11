const { Pool } = require('pg');
//Requiero o importo la funcion o metodo promisify del modulo UTIL que tiene nodejs que me permitira manejar promesas
const { promisify } = require('util');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '123abc',
  database: 'tienda_martin'
});

pool.query = promisify(pool.query);

module.exports = pool;

