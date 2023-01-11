const Compra = require('../modelo/Compra');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'compra';

class CompraDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla);
    let compras = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const compra = new Compra();
        compra.numero = registro.numero;
        compra.fecha = registro.fecha;
        compra.estado = registro.estado;
        compra.identificacionCliente = registro.identificacion_cliente;
        compra.total = registro.total;
        compras.push(compra);
      }
    }
    return compras;
  }

  async verInfoCompra (identificacionCliente, estado) {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE identificacion_cliente=$1 AND estado=$2', [identificacionCliente, estado]);  
    if (response.rows.length > 0) {
      return response.rows[0]
    }
    return null
  }

  async guardar (fecha, estado, identificacionCliente, total) {
    const compra = new Compra(fecha, identificacionCliente, estado, total);
    const response = await conexion.query('INSERT INTO ' + nombreTabla + ' (fecha, estado, identificacion_cliente, total) VALUES ($1, $2, $3, $4)', [compra.fecha, compra.estado, compra.identificacionCliente, compra.total]);
    return response.rowCount > 0;
  }

}

module.exports = CompraDAO;