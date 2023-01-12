class DetalleCompra {
  
  numeroCompra;
  codigoProducto;
  valor;

  constructor (numeroCompra, codigoProducto, valor) {
    this.numeroCompra = numeroCompra;
    this.codigoProducto = codigoProducto;
    this.valor = valor;
  }

}

module.exports = DetalleCompra;