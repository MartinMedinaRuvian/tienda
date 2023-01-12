const express = require('express');
const ruta = express.Router();
const CompraServicio = require('../servicio/CompraServicio');

const compraServicio = new CompraServicio();

ruta.get('/', async (req, res) =>{
  const registros = await compraServicio.verTodosCompras();
  res.status(200).json(registros);
});

ruta.get('/ver_por_cliente/:identificacion_cliente/:estado', async (req, res) =>{
  const { identificacion_cliente, estado } = req.params;
  const registros = await compraServicio.verPorCliente(identificacion_cliente, estado);
  res.status(200).json(registros);
});

ruta.post('/', async (req, res) => {
  const registroGuardar = req.body;
  const guardar = await compraServicio.guardarCompra(registroGuardar);
  res.status(200).json(guardar)
});

ruta.post('/info', async (req, res) =>{
  const compraVer = req.body;
  const registro = await compraServicio.verInfoCompra(compraVer);
  res.status(200).json(registro);
});


ruta.put('/confirmar', async (req, res) => {
  const registro = req.body;
  const actualizarEstado = compraServicio.confirmarCompra(registro)
  actualizarEstado ? res.status(200).json({"mensaje":"Guardado correctamente"}) : res.status(500).json({"mensaje":"Error al guardar"});
});

module.exports = ruta;