const express = require('express');
const ruta = express.Router();
const DetalleCompraServicio = require('../servicio/DetalleCompraServicio');

const detalleCompraServicio = new DetalleCompraServicio();

ruta.get('/', async (req, res) =>{
  const registros = await detalleCompraServicio.verTodosDetalleCompras();
  res.status(200).json(registros);
});

ruta.get('/verificar_producto_carrito/:codigo_producto/:identificacion_cliente', async (req, res) =>{
  const { codigo_producto, identificacion_cliente } = req.params
  const registros = await detalleCompraServicio.productoYaEstaEnCarritoCliente(codigo_producto, identificacion_cliente)
  res.status(200).json(registros);
});


ruta.post('/', async (req, res) => {
  const registroGuardar = req.body;
  const guardar = await detalleCompraServicio.guardarDetalleCompra(registroGuardar)
  guardar ? res.status(200).json({"mensaje":"Guardado correctamente"}) : res.status(500).json({"mensaje":"Error al guardar"});
});

ruta.delete('/:codigo_producto/:numero_compra', async (req, res) => {
  const { codigo_producto, numero_compra } = req.params
  const eliminar = await detalleCompraServicio.eliminarDetalleCompra(codigo_producto, numero_compra);
  eliminar ? res.status(200).json({"mensaje":"Eliminado correctamente"}) : res.status(500).json({"mensaje":"Error al eliminar"});
});


module.exports = ruta;