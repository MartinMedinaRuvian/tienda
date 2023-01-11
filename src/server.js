const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

/**
 * Middlewares
 */
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


/**
 * Importo rutas o endpoints a usar en el servidor
 */
const clienteRutas = require('./control/ClienteControl')
const productoRutas = require('./control/ProductoControl')
const compraRutas = require('./control/compraRutas')
const registroCompraRutas = require('./control/RegistroCompraControl')

/**
 * configuro las rutas del servidor
 */
app.use('/cliente', clienteRutas)
app.use('/producto', productoRutas)
app.use('/compra', compraRutas)
app.use('/registro_compra', registroCompraRutas)

module.exports = app;
