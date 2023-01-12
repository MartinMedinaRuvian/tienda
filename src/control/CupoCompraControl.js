const express = require('express');
const ruta = express.Router();
const CupoCompraServicio = require('../servicio/CupoCompraServicio');

const cupoCompraServio = new CupoCompraServicio();

ruta.get('/:identificacion_cliente/:total', async (req, res) =>{
  const { identificacion_cliente, total } = req.params
  const response = await cupoCompraServio.validarCupoClienteCompraPendiente(identificacion_cliente, total)
  res.status(200).json(response)
});

ruta.get('/nueva_compra/:identificacion_cliente/:total', async (req, res) =>{
  const { identificacion_cliente, total } = req.params
  const response = await cupoCompraServio.validarCupoClienteNuevaCompra(identificacion_cliente, total)
  res.status(200).json(response)
});

module.exports = ruta