class Cliente {

  id;
  identificacion;
  nombre;
  cupoCompra;

  constructor (identificacion, nombre, cupoCompra) {
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.cupoCompra = cupoCompra;
  }

}

module.exports = Cliente;