// const Pedido = require('../models/pedidos');
const Pedido = require('mongoose');

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
        const Pedido = await Pedido.findById(id);
        res.json(Pedido); // Enviamos la respuesta
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
        const Pedido = new Pedido({ // Creamos un nuevo objeto Pedido que recibimos en el body del request 
            marca:          req.body.marca,          
            modelo:         req.body.modelo,
            color:          req.body.color,
            etiqueta:       req.body.etiqueta,
            puertas:        req.body.puertas,
            cv:             req.body.cv,
            a_matricula:    req.body.a_matricula,
            cantidad:       req.body.cantidad,
            precio:         req.body.precio,

            propulsion:     req.body.propulsion,
            carroceria:     req.body.carroceria,
            traccion:       req.body.traccion
        });
        await Pedido.save(); // Esto tambien puede tomar bastante tiempo por eso le ponemos el await
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
    
        const Pedido = {
            marca         :       req.body.marca,         
            modelo        :       req.body.modelo,
            color         :       req.body.color,
            etiqueta      :       req.body.etiqueta,
            puertas       :       req.body.puertas,
            cv            :       req.body.cv,
            a_matricula   :       req.body.a_matricula,
            cantidad     :        req.body.cantidad,
            precio        :       req.body.precio,
            propulsion    :       req.body.propulsion,
            carroceria    :       req.body.carroceria,
            traccion      :       req.body.traccion
        }
        await Pedido.findByIdAndUpdate(id,{$set: Pedido},{new: true}); // El new:true es para que en caso de que no exista lo cree
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

    

