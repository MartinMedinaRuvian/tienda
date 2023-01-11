const ClienteServicio = require('./ClienteServicio');
const CompraServicio = require('./CompraServicio');
const estado = require('../constante/EstadoCompraConstante')

class CupoCompraServicio {

  async validarCupoCliente (identificacionCliente) {
    const infoCliente = await new ClienteServicio().verInfoCliente(identificacionCliente);
    const infoCompra = await new CompraServicio().verInfoCompra(identificacionCliente, estado.PENDIENTE);
    if (infoCliente && infoCompra) {
      return infoCliente.cupo_compra >= infoCompra.total;
    }
    return false;
  }

}

module.exports = CupoCompraServicio;