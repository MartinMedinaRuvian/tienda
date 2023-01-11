const Cliente = require('../modelo/Cliente');
const conexion = require('../util/ConexionDb');

const nombreTabla = 'cliente';

class ClienteDAO {

  async obtenerTodos () {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla);
    let clientes = [];
    if (response && response.rows.length > 0) {
      for (const registro of response.rows) {
        const cliente = new Cliente();
        cliente.id = registro.id;
        cliente.identificacion = registro.identificacion;
        cliente.nombre = registro.nombre;
        cliente.cupoCompra = registro.cupoCompra;
        clientes.push(cliente);
      }
    }
    return clientes;
  }

  async verInfo (identificacion) {
    const response = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE identificacion=$1', [identificacion]);  
    if (response.rows.length > 0) {
      return response.rows[0]
    }
    return null
  }

}

module.exports = ClienteDAO;