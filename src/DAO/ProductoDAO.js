const Producto = require('../modelo/Producto');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'producto';

class ProductoDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla);
    let productos = [];
    for (const registro of response.rows) {
      const producto = new Producto();
      producto.id = registro.id;
      producto.codigo = registro.codigo;
      producto.descripcion = registro.descripcion;
      producto.stock = registro.stock;
      producto.valor = registro.valor;
      productos.push(producto);
    }
    return productos;
  }

}

module.exports = ProductoDAO;