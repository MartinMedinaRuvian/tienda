const CompraDAO = require('../DAO/CompraDAO');
const estado = require('../constante/EstadoCompraConstante')

class CompraServicio {

  compraDAO = new CompraDAO();

  async verTodosCompras () {
    return this.compraDAO.obtenerTodos();
  }

  async guardarCompra (compra) {
    const { fecha, identificacionCliente, total } = compra
    return this.compraDAO.guardar(fecha, estado.PENDIENTE, identificacionCliente, total);
  }

  async verInfoCompra (identificacionCliente, estado) {
    return await this.compraDAO.verInfoCompra(identificacionCliente, estado);
  }

}

module.exports = CompraServicio;