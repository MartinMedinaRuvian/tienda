class Compra {
  
  numero;
  fecha;
  identificacionCliente;
  estado;

  constructor (fecha, identificacionCliente, estado) {
    this.fecha = fecha;
    this.identificacionCliente = identificacionCliente;
    this.estado = estado;
  }

}

module.exports = Compra;