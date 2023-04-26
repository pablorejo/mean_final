const Pedido = require('../models/pedidos');
// const Pedido = require('mongoose');

// Creamos un objeto que va a contener las funciones.
const pedidosCtrl = {};

/******** MÉTODOS GET *********/
// GET: Todos los pedidos de la base de datos
pedidosCtrl.findAllPedidos = async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);

};

// GET: Pedido con un id determinado
pedidosCtrl.findByID = async (req, res) => {
    const id = req.params.id;

    try{
        const pedido = await Pedido.findById(id);
        res.json(pedido); // Enviamos la respuesta
    }
    catch (error) {
        res.json({
            status: -1,
            statusText: "ID no encontrado"
        })
    }
};




/********* METODOS POST: ***********/
//POST: Añadir un Pedido 
pedidosCtrl.addPedido = async (req,res) => {
    console.log(req.body);

        
        // De esta forma no funciona bien el angular. No se muy bien el porque.
        // const Pedido = new Pedido(req.body); // Creamos un nuevo objeto Pedido que recibimos en el body del request 
        
        
    try {
        const pedido = new Pedido({ // Creamos un nuevo objeto Pedido que recibimos en el body del request 
            id_usuario:     req.body.id_usuario,
            artículos:      req.body.artículos,
            fecha_pedido:   req.body.fecha_pedido,  
            direccion_de_envio: req.body.direccion_de_envio  
        });
        await pedido.save(); // Esto tambien puede tomar bastante tiempo por eso le ponemos el await
        res.json({
            status: "Pedido guardado" // Enviamos un mensaje de estado de guardado
        })
    } 
    catch (error) {
        // Enviamos un mensaje de estado de guardado
        res.json({
            status: -1,
            textStatus: "Algo ha ido mal al guardar un Pedido"
        })
    }
}

/*********** MÉTODOS PUT(Update) ***********/
// PUT: Modificar los datos de un Pedido determinado
//En los parametros de la búsqueda (req) vamos a poner el id de la película que queramos
pedidosCtrl.updatePedido = async (req, res) => {
    const { id } = req.params; //Guardamos el id que recibimos por request
    try {
    
        const pedido = {
            id_usuario:     req.body.id_usuario,
            artículos:      req.body.artículos,
            fecha_pedido:   req.body.fecha_pedido,  
            direccion_de_envio: req.body.direccion_de_envio  
        }
        await pedido.findByIdAndUpdate(id,{$set: Pedido},{new: true}); // El new:true es para que en caso de que no exista lo cree
        res.json({
            status: 0,
            statusText: "Pedido actualizado"
        })
    }
    catch(erro){
        console.log("Actualizar Pedido ha fallado");
        res.json({
            satatus: -1,
            statusText: "Fallo al actualizar Pedido" 
        })
    }
};

/******** MÉTODOS DELETE  **********/
//DELETE: Eliminar un Pedido determinado 
pedidosCtrl.deletePedido = async (req, res) =>{
    await Pedido.findByIdAndRemove(req.params.id);
    res.json({
        status: 0,
        statusText: "Pedido eliminado con exito"
    })
};







// Exportamos el controlador de pedidos
module.exports = pedidosCtrl;

    

