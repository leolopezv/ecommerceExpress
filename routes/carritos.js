var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Carrito = require('../models').carrito;
const Foto = require('../models').foto;

router.get('/findAll/json', function(req, res, next) {  
    Carrito.findAll({  
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [{
            model: Foto,
            as: 'foto',
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }]
    })  
    .then(carritos => {  
        res.json(carritos);  
    })  
    .catch(error => res.status(400).json({ error: 'Error al obtener carritos', detalles: error.message })); 
});

module.exports = router;
