const ProductoDAO = require('../DAO/ProductoDAO');

class ProductoServicio {

  productoDAO = new ProductoDAO();

  async verTodosProductos () {
    return this.productoDAO.obtenerTodos();
  }

}

module.exports = ProductoServicio;