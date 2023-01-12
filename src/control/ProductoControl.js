const express = require('express');
const ruta = express.Router();
const ProductoServicio = require('../servicio/ProductoServicio');

const productoServicio = new ProductoServicio()

ruta.get('/', async (req, res) =>{
  const registros = await productoServicio.verTodosProductos();
  res.status(200).json(registros);
});

ruta.get('/comprados/:identificacion_cliente', async (req, res) =>{
  const { identificacion_cliente } = req.params
  const registros = await productoServicio.verTodosProductosComprados(identificacion_cliente);
  res.status(200).json(registros);
});

module.exports = ruta;