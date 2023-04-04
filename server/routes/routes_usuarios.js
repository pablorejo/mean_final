const express = require('express');

// Obtenemos el objeto router de la funcion de express Router()
const router = express.Router();


//  Requerimos los controladores
const pedidosCtrl = require('../controllers/controller_pedidos');




/****** RUTAS PARA LAS FUNCIONES DEL FICHERO CONTROLLER.JS: *******/
// Devolver todos los Pedidos
router.get('/', pedidosCtrl.findAllPedidos);
// Devolver un coche con un ID determinado
router.get('/:id', pedidosCtrl.findByID);
// Añadir un coche
router.post('/', pedidosCtrl.addPedido);
// Modificar los datos de un coche con un ID determinado
router.put('/:id', pedidosCtrl.updatePedido);
// Eliminar un coche con un ID determinado
router.delete('/:id', pedidosCtrl.deletePedido);


// Busacar por id
router.get('/id/:id', pedidosCtrl.findByID);




// Rutas para los usuarios


// Exportamos el router
module.exports = router;