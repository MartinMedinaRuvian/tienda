const DetalleCompraDAO = require('../DAO/DetalleCompraDAO');

class DetalleCompraServicio {

  detalleCompraDAO = new DetalleCompraDAO();

  async verTodosDetalleCompras() {
    return this.detalleCompraDAO.obtenerTodos();
  }

  async guardarDetalleCompra(detalleCompra) {
    const { numeroCompra, codigoProducto, valor } = detalleCompra
    return await this.detalleCompraDAO.guardar(numeroCompra, codigoProducto, valor);
  }

  async eliminarDetalleCompra(detalleCompra) {
    const { codigoProducto, numeroCompra } = detalleCompra
    return this.detalleCompraDAO.eliminar(codigoProducto, numeroCompra);
  }

}

module.exports = DetalleCompraServicio;