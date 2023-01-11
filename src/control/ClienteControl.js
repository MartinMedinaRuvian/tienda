const express = require('express');
const ruta = express.Router();
const ClienteServicio = require('../servicio/ClienteServicio');

const clienteServio = new ClienteServicio();

ruta.get('/', async (req, res) =>{
  const registros = await clienteServio.verTodosClientes();
  res.status(200).json(registros)
});

module.exports = ruta;