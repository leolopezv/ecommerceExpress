var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Foto = require('../models').foto;

router.get('/findAll/json', function(req, res, next) {  
    Foto.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    }) 
     
    .then(fotos => {  
        res.json(fotos);  
    })  
    .catch(error => res.status(400).send(error)) 
});
 
// FILTRO POR PRECIO DE MAYOR A MENOR Y DE MENOR A MAYOR
router.get('/findAllByPrice/json', function(req, res, next) {
    let order = req.query.order === 'desc' ? 'DESC' : 'ASC'; // Verifica si se debe ordenar de manera descendente, por defecto es ascendente
    Foto.findAll({
        attributes: { exclude: ["updatedAt"] },
        order: [
            ['precio', order] // Ordenar por el atributo "precio"
        ]
    })
    .then(fotos => {
        res.json(fotos);
    })
    .catch(error => res.status(400).send(error));
});

router.get('/findAllByPrice/view', function(req, res, next) {
    let order = req.query.order === 'desc' ? 'DESC' : 'ASC'; // Verifica si se debe ordenar de manera descendente, por defecto es ascendente
    Foto.findAll({
        attributes: { exclude: ["updatedAt"] },
        order: [
            ['precio', order] // Ordenar por el atributo "precio"
        ]
    })
    .then(fotos => {
        // Cambiar el nombre de la vista si es necesario
        res.render('productos', { title: 'Fotos', arrFotos: fotos });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;



