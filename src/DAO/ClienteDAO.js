const Cliente = require('../modelo/Cliente');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'cliente';

class ClienteDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla);
    let clientes = [];
    for (const registro of response.rows) {
      const cliente = new Cliente();
      cliente.id = registro.id;
      cliente.identificacion = registro.identificacion;
      cliente.nombre = registro.nombre;
      cliente.cupoCompra = registro.cupoCompra;
      clientes.push(cliente);
    }
    return clientes;
  }

}

module.exports = ClienteDAO;