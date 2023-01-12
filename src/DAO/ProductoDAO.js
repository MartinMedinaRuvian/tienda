const Producto = require('../modelo/Producto');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'producto';

class ProductoDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT COUNT(d.codigo_producto) as cantidad, p.codigo, p.descripcion, p.valor FROM detalle_compra d inner join producto p ON p.codigo = d.codigo_producto GROUP BY (p.codigo, p.descripcion, p.valor) ORDER BY cantidad desc');
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