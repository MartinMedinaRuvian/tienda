const express = require('express');
const ruta = express.Router();
const DetalleCompraServicio = require('../servicio/DetalleCompraServicio');

const detalleCompraServicio = new DetalleCompraServicio();

ruta.get('/', async (req, res) =>{
  const registros = await detalleCompraServicio.verTodosDetalleCompras();
  res.status(200).json(registros);
});

ruta.post('/', async (req, res) => {
  const registroGuardar = req.body;
  const guardar = await detalleCompraServicio.guardarDetalleCompra(registroGuardar)
  guardar ? res.status(200).json({"mensaje":"Guardado correctamente"}) : res.status(500).json({"mensaje":"Error al guardar"});
});

ruta.delete('/', async (req, res) => {
  const registroEliminar = req.body;
  const eliminar = await detalleCompraServicio.eliminarDetalleCompra(registroEliminar);
  eliminar ? res.status(200).json({"mensaje":"Eliminado correctamente"}) : res.status(500).json({"mensaje":"Error al eliminar"});
});


module.exports = ruta;