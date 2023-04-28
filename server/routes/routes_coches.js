const express = require('express');

// Obtenemos el objeto router de la funcion de express Router()
const router = express.Router();


//  Requerimos los controladores
const cochesCtrl = require('../controllers/controller_coches');




/****** RUTAS PARA LAS FUNCIONES DEL FICHERO CONTROLLER.JS: *******/
// Devolver todos los Coches
router.get('/', cochesCtrl.findAllCoches);
// Devolver un coche con un ID determinado
// router.get('/:id', cochesCtrl.findByID);
// Añadir un coche
router.post('/', cochesCtrl.addCoche);
// Modificar los datos de un coche con un ID determinado
router.put('/:id', cochesCtrl.updateCoche);
// Eliminar un coche con un ID determinado
router.delete('/:id', cochesCtrl.deleteCoche);

// Buscar por marca
router.get('/marca/:marca', cochesCtrl.findMarca);

// Busacar por id
router.get('/id/:id', cochesCtrl.findByID);

// Busacar por modelo
router.get('/modelo/:modelo', cochesCtrl.findModelo);



// Rutas para los usuarios


// Exportamos el router
module.exports = router;