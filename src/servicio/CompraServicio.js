const CompraDAO = require('../DAO/CompraDAO');
const estado = require('../constante/EstadoCompraConstante')

class CompraServicio {

  compraDAO = new CompraDAO();

  async verTodosCompras () {
    return this.compraDAO.obtenerTodos();
  }

  async verPorCliente (identificacionCliente, estado) {
    return await this.compraDAO.verPorCliente(identificacionCliente, estado);
  }

  async guardarCompra (compra) {
    const { fecha, identificacionCliente } = compra
    return this.compraDAO.guardar(fecha, estado.PENDIENTE, identificacionCliente);
  }

  async totalCompraPendienteCliente (identificacionCliente, estado) {  
    return await this.compraDAO.totalCompraPendienteCliente(identificacionCliente, estado);
  }

  async verInfoCompra (compra) {
    const { identificacionCliente, estado } = compra
    return await this.compraDAO.verInfoCompra(identificacionCliente, estado);
  }

  async confirmarCompra (compra) {
    const { numero } = compra;
    return await this.compraDAO.cambiarEstado(estado.CONFIRMADA, numero);
  }

}

module.exports = CompraServicio;