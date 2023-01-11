const express = require('express');
const ruta = express.Router();
const CompraServicio = require('../servicio/CompraServicio');
const CupoCompraServicio = require('../servicio/CupoCompraServicio')

const compraServicio = new CompraServicio();

ruta.get('/', async (req, res) =>{
  const registros = await compraServicio.verTodosCompras();
  res.status(200).json(registros);
});

ruta.post('/', async (req, res) => {
  const registroGuardar = req.body;
  const guardar = compraServicio.guardarCompra(registroGuardar);
  guardar ? res.status(200).json({"mensaje":"Guardado correctamente"}) : res.status(500).json({"mensaje":"Error al guardar"});
});

ruta.post('/cambiar_estado', async (req, res) => {
  const registroGuardar = req.body;
  const guardar = compraServicio.guardarCompra(registroGuardar);
  guardar ? res.status(200).json({"mensaje":"Guardado correctamente"}) : res.status(500).json({"mensaje":"Error al guardar"});
});

module.exports = ruta;