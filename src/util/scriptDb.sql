CREATE DATABASE tienda_martin;

CREATE TABLE producto(
  id SERIAL PRIMARY KEY,
  codigo CHAR(100) UNIQUE,
  descripcion CHAR(200),
  stock INTEGER,
  valor FLOAT
);

CREATE TABLE cliente(
  id SERIAL PRIMARY KEY,
  nombre CHAR(100),
  identificacion CHAR(20) UNIQUE,
  cupo_compra FLOAT
);

CREATE TABLE compra(
  numero SERIAL PRIMARY KEY,
  fecha DATE,
  identificacion_cliente CHAR(20) UNIQUE,
  CONSTRAINT identificacion_llave_cliente FOREIGN KEY (identificacion_cliente) REFERENCES cliente(identificacion)
);

CREATE TABLE registro_compra(
  id SERIAL PRIMARY KEY,
  numero_compra INTEGER,
  codigo_producto CHAR(100),
  cantidad INTEGER,
  valor FLOAT,
  CONSTRAINT codigo_producto_llave_producto FOREIGN KEY (codigo_producto) REFERENCES producto(codigo),
  CONSTRAINT numero_compra_llave_producto FOREIGN KEY (numero_compra) REFERENCES compra(numero)
);

INSERT INTO producto(codigo, descripcion, stock, valor) VALUES
('0001', 'Mouse Logitech', 12, 41000),
('0002', 'Teclado mecanico VSG', 5, 189000),
('0003', 'Teclado compumax', 5, 24500),
('0004', 'Portatil Acer i5', 4, 1950000);

INSERT INTO cliente(nombre, identificacion, cupo_compra) VALUES
('Martin Medina', '1090', 250000),
('Cristian Rojas', '1092', 300000),
('Angie Diaz', '1093', 125000);