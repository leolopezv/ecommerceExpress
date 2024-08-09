var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Tarjeta = require('../models').tarjeta;

router.get('/findAll/json', function(req, res, next) {  
    Tarjeta.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    })  
    .then(tarjetas => {  
        res.json(tarjetas);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;