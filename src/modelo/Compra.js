class Compra {
  
  numero;
  fecha;
  identificacionCliente;
  estado;
  total;

  constructor (fecha, identificacionCliente, estado, total) {
    this.fecha = fecha;
    this.identificacionCliente = identificacionCliente;
    this.estado = estado;
    this.total = total;
  }

}

module.exports = Compra;