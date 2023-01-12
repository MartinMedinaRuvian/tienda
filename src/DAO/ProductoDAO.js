const Producto = require('../modelo/Producto');
const conexion = require('../util/ConexionDb');

class ProductoDAO {


  async obtenerTodos() {
    let response = await conexion.query('SELECT COUNT(d.codigo_producto) as cantidad, p.codigo, p.descripcion, p.valor FROM detalle_compra d right join producto p ON p.codigo = d.codigo_producto GROUP BY (p.codigo, p.descripcion, p.valor) ORDER BY cantidad desc');
    let productos = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const producto = new Producto();
        producto.codigo = registro.codigo;
        producto.descripcion = registro.descripcion;
        producto.valor = registro.valor;
        productos.push(producto);
      }
    }
    return productos;
  }

  async obtenerTodosComprados(identificacionCliente) {
    let response = await conexion.query('SELECT COUNT(d.codigo_producto) as cantidad, p.codigo, p.descripcion, p.valor FROM detalle_compra d inner join producto p ON p.codigo = d.codigo_producto INNER JOIN compra c ON c.numero = d.numero_compra WHERE c.estado=$1 GROUP BY (p.codigo, p.descripcion, p.valor) ORDER BY cantidad desc', ['CONFIRMADA']);
    if (identificacionCliente !== 'TODOS') {
      response = await conexion.query('SELECT COUNT(d.codigo_producto) as cantidad, p.codigo, p.descripcion, p.valor FROM detalle_compra d inner join producto p ON p.codigo = d.codigo_producto INNER JOIN compra c ON c.numero = d.numero_compra WHERE c.estado=$1 AND c.identificacion_cliente=$2 GROUP BY (p.codigo, p.descripcion, p.valor) ORDER BY cantidad desc', ['CONFIRMADA', identificacionCliente]);
    }
    let productos = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const producto = new Producto();
        producto.codigo = registro.codigo;
        producto.descripcion = registro.descripcion;
        producto.valor = registro.valor;
        producto.cantidad = registro.cantidad;
        productos.push(producto);
      }
    }
    return productos;
  }

}

module.exports = ProductoDAO;