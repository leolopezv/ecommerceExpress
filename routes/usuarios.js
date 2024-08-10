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

module.exports = router;