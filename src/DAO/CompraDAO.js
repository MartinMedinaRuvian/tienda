const Compra = require('../modelo/Compra');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'compra';

class CompraDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT c.numero, p.descripcion, p.codigo, d.valor, c.fecha FROM compra c INNER JOIN detalle_compra d ON c.numero = d.numero_compra INNER JOIN producto p ON d.codigo_producto = p.codigo WHERE c.estado=$1', ['CONFIRMADA']);
    let compras = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const compra = new Compra();
        compra.numero = registro.numero;
        compra.fecha = registro.fecha;
        compra.estado = registro.estado;
        compra.identificacionCliente = registro.identificacion_cliente;
        compra.descripcionProducto = registro.descripcion;
        compra.codigoProducto = registro.codigo;
        compra.valorProducto = registro.valor;
        compras.push(compra);
      }
    }
    return compras;
  }

  async verPorCliente (identificacionCliente, estado) {
    const response = await conexion.query('SELECT c.numero, p.descripcion, p.codigo, d.valor, c.fecha FROM compra c INNER JOIN detalle_compra d ON c.numero = d.numero_compra INNER JOIN producto p ON d.codigo_producto = p.codigo WHERE c.identificacion_cliente=$1 AND c.estado=$2', [identificacionCliente, estado]);
    let compras = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const compra = new Compra();
        compra.numero = registro.numero;
        compra.fecha = registro.fecha;
        compra.estado = registro.estado;
        compra.identificacionCliente = registro.identificacion_cliente;
        compra.descripcionProducto = registro.descripcion;
        compra.codigoProducto = registro.codigo;
        compra.valorProducto = registro.valor;
        compras.push(compra);
      }
    }
    return compras;
  }


  async totalCompraPendienteCliente (identificacionCliente, estado) {
    const response = await conexion.query('SELECT SUM(d.valor) as total from detalle_compra d INNER JOIN compra c ON c.numero = d.numero_compra WHERE c.identificacion_cliente=$1 AND c.estado=$2', [identificacionCliente, estado]);  
    if (response && response.rows.length > 0) {
      return {
        total: response.rows[0].total
      }
    }
    return null;
  }

  async verInfoCompra (identificacionCliente, estado) {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE identificacion_cliente=$1 AND estado=$2', [identificacionCliente, estado]);  
    if (response.rows.length > 0) {
      return response.rows[0]
    }
    return null
  }

  async guardar (fecha, estado, identificacionCliente) {
    const compra = new Compra(fecha, identificacionCliente, estado);
    const response = await conexion.query('INSERT INTO ' + nombreTabla + ' (fecha, estado, identificacion_cliente) VALUES ($1, $2, $3) returning numero', [compra.fecha, compra.estado, compra.identificacionCliente]);
    if (response && response.rows.length > 0) {
      return {
        numero: response.rows[0].numero
      }
    }
    return null;
  }

  async cambiarEstado (estado, numeroCompra) {
    const compra = new Compra()
    compra.estado = estado;
    const response = await conexion.query('UPDATE ' + nombreTabla + ' SET estado=$1 WHERE numero=$2', [estado, numeroCompra]);
    return response.rowCount > 0;
  }

}

module.exports = CompraDAO;