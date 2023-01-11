const ClienteDAO = require('../DAO/ClienteDAO');

class ClienteServicio {

  clienteDAO = new ClienteDAO();

  async verTodosClientes () {
    return this.clienteDAO.obtenerTodos();
  }

}

module.exports = ClienteServicio;