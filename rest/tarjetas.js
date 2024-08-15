var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Tarjeta = require('../models').tarjeta;

router.post('/save', function(req, res, next) {
    let { banco, numero, titular, fecha} = req.body;
    Tarjeta.create({
      banco: banco,
      numero: numero,
      titular: titular,
      fecha: fecha,
      codigo: '777',
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(tarjeta => {
      res.json(tarjeta);
    })
    .catch(error => res.status(400).send(error));
});

router.get('/findAll/json', function(req, res, next) {  
    Tarjeta.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    })  
    .then(tarjetas => {  
        res.json(tarjetas);
    })
    .catch(error => res.status(400).send(error));
});

router.put('/update/:id', function(req, res, next) {
    let { banco, numero, titular, fecha, codigo, usuario_id } = req.body;
    let id = parseInt(req.params.id);
    Tarjeta.update({
      banco: banco,
      numero: numero,
      titular: titular,
      fecha: fecha,
      codigo: codigo,
      usuario_id: usuario_id,
      updatedAt: new Date()
    }, {
      where: { id: id } 
    })
    .then(respuesta => {
      res.json(respuesta);
    })
    .catch(error => res.status(400).send(error));
  });
  
router.delete('/delete/:id', function(req, res, next) {
    let id = parseInt(req.params.id);
    Tarjeta.destroy({
      where: { id: id }
    })
    .then(respuesta => {
      res.json(respuesta);
    })
    .catch(error => res.status(400).send(error));
  });
  
module.exports = router;