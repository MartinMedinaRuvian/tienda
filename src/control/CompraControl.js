const express = require('express');
const ruta = express.Router();
const ClienteServicio = require('../servicio/ClienteServicio')

ruta.get('/', async (req, res) =>{
  // const clientes = await new ClienteServicio().verTodosClientes()
  res.status(200).json({"m":'ok'})
})

module.exports = ruta