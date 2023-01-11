class Producto {
  
  id;
  codigo;
  descripcion;
  stock;
  valor;

  constructor (codigo, descripcion, stock, valor) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.stock = stock;
    this.valor = valor;
  }

}

module.exports = Producto;