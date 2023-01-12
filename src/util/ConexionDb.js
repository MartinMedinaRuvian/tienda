const { Pool } = require('pg');
//Requiero o importo la funcion o metodo promisify del modulo UTIL que tiene nodejs que me permitira manejar promesas
const { promisify } = require('util');

const { configuracionLocal } = require('../configuracion/config');

const pool = new Pool(configuracionLocal);

pool.query = promisify(pool.query);

module.exports = pool;

