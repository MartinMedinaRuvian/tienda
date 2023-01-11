const CompraDAO = require('../DAO/CompraDAO');

class CompraServicio {

  compraDAO = new CompraDAO();

  async verTodosCompras () {
    return this.compraDAO.obtenerTodos();
  }

  async guardarCompra (compra) {
    const { fecha, estado, identificacionCliente, total } = compra
    return this.compraDAO.guardar(fecha, estado, identificacionCliente, total)
  }

}

module.exports = CompraServicio;