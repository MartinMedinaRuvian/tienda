const ClienteServicio = require('./ClienteServicio');
const CompraServicio = require('./CompraServicio');
const estado = require('../constante/EstadoCompraConstante')

class CupoCompraServicio {

  async validarCupoClienteCompraPendiente (identificacionCliente, totalProductoAgregar) {
    const infoCliente = await new ClienteServicio().verInfoCliente(identificacionCliente);
    const infoCompra = await new CompraServicio().totalCompraPendienteCliente(identificacionCliente, estado.PENDIENTE);
    if (infoCliente && infoCompra) {
      const totalCompra = infoCompra.total + parseFloat(totalProductoAgregar)
      return infoCliente.cupo_compra >= totalCompra;
    }
    return false;
  }

  async validarCupoClienteNuevaCompra (identificacionCliente, total) {
    const infoCliente = await new ClienteServicio().verInfoCliente(identificacionCliente);
    if (infoCliente && total) {
      return infoCliente.cupo_compra >= total;
    }
    return false;
  }

}

module.exports = CupoCompraServicio;