const request  = require('supertest')

const app = require('../src/server')

describe("Endpoint o rutas /producto", ()=>{
  it ('Responde con la lista de productos', done => {
    request(app)
      .get('/producto')
      .set('Accep', 'application/json')
      .expect(200, done)
  })
})

describe("Endpoint o rutas /cliente", ()=>{
  it ('Responde con la lista de clientes', done => {
    request(app)
      .get('/cliente')
      .set('Accep', 'application/json')
      .expect(200, done)
  })
})

describe("Endpoint o rutas /compra", ()=>{
  it ('Responde con la lista de compras', done => {
    request(app)
      .get('/compra')
      .set('Accep', 'application/json')
      .expect(200, done)
  })
  it ('Confirmar una compra, debe cambiar el estado de la compra', done => {
    const data = {
      numero: 1
    }
    request(app)
      .put('/compra/confirmar')
      .send(data)
      .set('Accep', 'application/json')
      .expect(200, done)
  })
})

describe("Endpoint o rutas /detalle_compra", ()=>{
  it ('Responde con la lista de los detalles de la compra', done => {
    request(app)
      .get('/detalle_compra')
      .set('Accep', 'application/json')
      .expect(200, done)
  })
  it ('Verificar que producto este en el carrito de compra', done => {
    request(app)
      .get('/detalle_compra/verificar_producto_carrito/0002/1092')
      .set('Accep', 'application/json')
      .expect(200, done)
  })
})

describe("Endpoint o rutas /cupo_compra", ()=>{
  it ('Responde si true o false si el cliente tiene cupo disponible en una compra pendiente', done => {
    request(app)
      .get('/cupo_compra/1092/5000')
      .set('Accep', 'application/json')
      .expect(200)
      .expect('true', done)
  })
})