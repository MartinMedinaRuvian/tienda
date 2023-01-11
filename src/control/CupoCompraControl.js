const express = require('express');
const ruta = express.Router();
const CupoCompraServicio = require('../servicio/CupoCompraServicio');

const cupoCompraServio = new CupoCompraServicio();

ruta.get('/:identificacion_cliente', async (req, res) =>{
  const { identificacion_cliente } = req.params
  const response = await cupoCompraServio.validarCupoCliente(identificacion_cliente)
  res.status(200).json(response)
});

module.exports = ruta