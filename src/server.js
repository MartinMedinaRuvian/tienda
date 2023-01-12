const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({ path: './credenciales.env' })
const path = require('path');

const app = express();

/**
 * Middlewares
 */
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**
 * Configuro la carpeta publica donde va ir todo el frontend
 */
app.use(express.static(path.join(__dirname, 'publico')))


/**
 * Importo rutas o endpoints a usar en el servidor
 */
const clienteRutas = require('./control/ClienteControl');
const productoRutas = require('./control/ProductoControl');
const compraRutas = require('./control/CompraControl');
const detalleCompraRuta = require('./control/DetalleCompraControl');
const cupoCompraRuta = require('./control/CupoCompraControl');

/**
 * configuro las rutas del servidor
 */
app.use('/cliente', clienteRutas);
app.use('/producto', productoRutas);
app.use('/compra', compraRutas);
app.use('/detalle_compra', detalleCompraRuta);
app.use('/cupo_compra', cupoCompraRuta);

module.exports = app;
