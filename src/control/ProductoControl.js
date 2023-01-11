const express = require('express');
const ruta = express.Router();
const ProductoServicio = require('../servicio/ProductoServicio');

const productoServicio = new ProductoServicio()

ruta.get('/', async (req, res) =>{
  const registros = await productoServicio.verTodosProductos();
  res.status(200).json(registros);
});

module.exports = ruta;