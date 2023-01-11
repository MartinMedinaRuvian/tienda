class DetalleCompra {
  
  numeroCompra;
  codigoProducto;
  cantidad;
  valor;

  constructor (numeroCompra, codigoProducto, cantidad, valor) {
    this.numeroCompra = numeroCompra;
    this.codigoProducto = codigoProducto;
    this.cantidad = cantidad;
    this.valor = valor;
  }

}

module.exports = DetalleCompra;