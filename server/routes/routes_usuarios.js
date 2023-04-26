const express = require('express');

// Obtenemos el objeto router de la funcion de express Router()
const router = express.Router();


//  Requerimos los controladores
const usurariosCtrl = require('../controllers/controller_usuarios');




/****** RUTAS PARA LAS FUNCIONES DEL FICHERO CONTROLLER.JS: *******/
// Devolver todos los Pedidos
router.get('/', usurariosCtrl.findAllusuarios);

// Comprueba si el usuario existe 
// router.get('/:check-id', usurariosCtrl.findByID);
// Añadir un coche
router.post('/', usurariosCtrl.addUsuario);
// Modificar los datos de un coche con un ID determinado
router.put('/:id', usurariosCtrl.updateUsuario);
// Eliminar un coche con un ID determinado
router.delete('/:id', usurariosCtrl.deleteUsuario);


// Busacar por id
router.get('/nombre/:nombre', usurariosCtrl.findNombre);
// Devolver un usuario con un ID determinado
router.get('/id/:id', usurariosCtrl.findByID);



// Rutas para los usuarios


// Exportamos el router
module.exports = router;