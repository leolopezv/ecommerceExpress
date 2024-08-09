var express = require('express');
var router = express.Router();
const {Sequelize, Op} = require('sequelize');
const Foto = require('../models').foto;

router.get('/findAll/json', function(req, res, next) {  
    Usuario.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    })  
    .then(fotos => {  
        res.json(fotos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;