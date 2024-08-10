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

module.exports = router;