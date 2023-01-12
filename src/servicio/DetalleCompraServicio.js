const DetalleCompraDAO = require('../DAO/DetalleCompraDAO');
const estado = require('../constante/EstadoCompraConstante')

class DetalleCompraServicio {

  detalleCompraDAO = new DetalleCompraDAO();

  async verTodosDetalleCompras() {
    return this.detalleCompraDAO.obtenerTodos();
  }

  async guardarDetalleCompra(detalleCompra) {
    const { numeroCompra, codigoProducto, valor } = detalleCompra
    return await this.detalleCompraDAO.guardar(numeroCompra, codigoProducto, valor);
  }

  async eliminarDetalleCompra(codigoProducto, numeroCompra) {
    return await this.detalleCompraDAO.eliminar(codigoProducto, numeroCompra);
  }

  async productoYaEstaEnCarritoCliente(codigoProducto, identificacionCliente) {
    return await this.detalleCompraDAO.productoYaEstaEnCarritoCliente(estado.PENDIENTE, codigoProducto, identificacionCliente)
  }

}

module.exports = DetalleCompraServicio;