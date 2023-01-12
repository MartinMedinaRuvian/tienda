class Producto {
  
  id;
  codigo;
  descripcion;
  valor;

  constructor (codigo, descripcion, valor) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.valor = valor;
  }

}

module.exports = Producto;