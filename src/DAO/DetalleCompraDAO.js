const DetalleCompra = require('../modelo/DetalleCompra');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'detalle_compra';

class DetalleCompraDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla);
    let detalleCompras = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const detalleCompra = new DetalleCompra();
        detalleCompra.codigoProducto = registro.codigo_producto;
        detalleCompra.numeroCompra = registro.numero_compra;
        detalleCompra.valor = registro.valor;
        detalleCompras.push(detalleCompra);
      }
    }
    return detalleCompras;
  }

  async guardar (numeroCompra, codigoProducto, valor) {
    const detalleCompra = new DetalleCompra(numeroCompra, codigoProducto, valor);
    const response = await conexion.query('INSERT INTO ' + nombreTabla + ' (numero_compra, codigo_producto, valor) VALUES ($1, $2, $3)', [detalleCompra.numeroCompra, detalleCompra.codigoProducto, detalleCompra.valor]);
    return response.rowCount > 0;
  }

  async eliminar (codigoProducto, numeroCompra) {
    const response = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo_producto=$1 and numero_compra=$2', [codigoProducto, numeroCompra]);
    return response
  }

}

module.exports = DetalleCompraDAO;