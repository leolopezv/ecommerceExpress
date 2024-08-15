var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Foto = require('../models').foto;
const Carrito = require('../models').carrito;

router.get('/findAll/json', function(req, res, next) {  
    Carrito.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
        include: [{
            model: Foto,
            as: 'foto',
            attributes: { exclude: ["createdAt","updatedAt"] }
        }]
    })  
    .then(carritos  => {  
        res.json(carritos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/save', function(req, res, next) {
  let { foto_id, cantidad } = req.body;
  Carrito.create({
    foto_id: foto_id,
    cantidad: cantidad,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(carrito => {
    res.json(carrito);
  })
  .catch(error => res.status(400).send(error));
});

router.get('/calcularTotal/:userId', function(req, res, next) {
  let userId = parseInt(req.params.userId);

  Carrito.findAll({
      where: { userId: userId },
      attributes: ['cantidad'],
      include: [{
          model: Foto,
          as: 'foto',
          attributes: ['precio']
      }]
  })
  .then(carritos => {
      // Calcula el total
      const total = carritos.reduce((total, carrito) => {
          return total + carrito.cantidad * carrito.foto.precio;
      }, 0);

      res.json({ total });
  })
  .catch(error => res.status(400).send(error));
});

router.delete('/delete/:id', function(req, res, next) {
    let id = parseInt(req.params.id);
        Carrito.destroy({
      where: { id: id }
    })
    .then(respuesta => {
      res.json(respuesta);
    })
    .catch(error => res.status(400).send(error));
  });
  
  module.exports = router;