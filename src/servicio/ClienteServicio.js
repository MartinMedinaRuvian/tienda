const ClienteDAO = require('../DAO/ClienteDAO');

class ClienteServicio {

  clienteDAO = new ClienteDAO();

  async verTodosClientes () {
    return this.clienteDAO.obtenerTodos();
  }

  async verInfoCliente (identificacion) {
    return await this.clienteDAO.verInfo(identificacion)
  }

}

module.exports = ClienteServicio;