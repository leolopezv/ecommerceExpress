var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Gorra = require('../models').gorra;

router.get('/findAll/json', function(req, res, next) {  
    Gorra.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    })  
    .then(gorras => {  
        res.json(gorras);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;