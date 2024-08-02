var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Usuario = require('../models').usuario;

router.get('/findAll/json', function(req, res, next) {  
    Usuario.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    })  
    .then(usuarios => {  
        res.json(usuarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/save', function(req, res, next) {
    let { nombre, correo, celular, comentario } = req.body;
    Usuario.create({
      nombre: nombre,
      correo: correo,
      celular: celular,
      comentario: comentario,  
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(usuario => {
      res.json(usuario);
    })
    .catch(error => res.status(400).send(error));
  });

module.exports = router;