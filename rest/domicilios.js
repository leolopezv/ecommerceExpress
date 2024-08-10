var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Domicilio = require('../models').domicilio;
const Usuario = require('../models').usuario;

router.get('/findAll/json', function(req, res, next) {  
    Domicilio.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
        include: [{
            model: Usuario,
            as: 'usuario',
            attributes: { exclude: ["createdAt","updatedAt"] }
        }]
    })  
    .then(domicilios => {  
        res.json(domicilios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.put('/update/:id', function(req, res, next) {
  let { pais, provincia, ciudad, direccion, postal, usuario_id } = req.body;
  let id = parseInt(req.params.id);
  Domicilio.update({
    pais: pais,
    provincia: provincia,
    ciudad: ciudad,
    direccion: direccion,
    postal: postal,
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
  Domicilio.destroy({
    where: { id: id }
  })
  .then(respuesta => {
    res.json(respuesta);
  })
  .catch(error => res.status(400).send(error));
});

module.exports = router;