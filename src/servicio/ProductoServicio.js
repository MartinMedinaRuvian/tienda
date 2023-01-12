const ProductoDAO = require('../DAO/ProductoDAO');

class ProductoServicio {

  productoDAO = new ProductoDAO();

  async verTodosProductos () {
    return this.productoDAO.obtenerTodos();
  }

  async verTodosProductosComprados (identificacionCliente) {
    return this.productoDAO.obtenerTodosComprados(identificacionCliente);
  }

}

module.exports = ProductoServicio;