const express = require('express');
const ruta = express.Router();
const ProductoServicio = require('../servicio/ProductoServicio');

ruta.get('/', async (req, res) =>{
  const registros = await new ProductoServicio().verTodosProductos();
  res.status(200).json(registros);
});

module.exports = ruta;