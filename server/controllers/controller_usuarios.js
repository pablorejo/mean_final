// const Usuario = require('../models/usuarios');
const Usuario = require('mongoose');


// Creamos un objeto que va a contener las funciones.
const usuariosCtrl = {};

/******** MÉTODOS GET *********/
// GET: Todos los usuarios de la base de datos
usuariosCtrl.findAllusuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);

};

// GET: Usuario con un id determinado
usuariosCtrl.findByID = async (req, res) => {
    const id = req.params.id;

    try{
        const Usuario = await Usuario.findById(id);
        res.json(Usuario); // Enviamos la respuesta
    }
    catch (error) {
        res.json({
            status: -1,
            statusText: "ID no encontrado"
        })
    }
};




/********* METODOS POST: ***********/
//POST: Añadir un Usuario 
usuariosCtrl.addUsuario = async (req,res) => {
    console.log(req.body);

        
        // De esta forma no funciona bien el angular. No se muy bien el porque.
        // const Usuario = new Usuario(req.body); // Creamos un nuevo objeto Usuario que recibimos en el body del request 
        
        
    try {
        const Usuario = new Usuario({ // Creamos un nuevo objeto Usuario que recibimos en el body del request 
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
        await Usuario.save(); // Esto tambien puede tomar bastante tiempo por eso le ponemos el await
        res.json({
            status: "Usuario guardado" // Enviamos un mensaje de estado de guardado
        })
    } 
    catch (error) {
        // Enviamos un mensaje de estado de guardado
        res.json({
            status: -1,
            textStatus: "Algo ha ido mal al guardar un Usuario"
        })
    }
}

/*********** MÉTODOS PUT(Update) ***********/
// PUT: Modificar los datos de un Usuario determinado
//En los parametros de la búsqueda (req) vamos a poner el id de la película que queramos
usuariosCtrl.updateUsuario = async (req, res) => {
    const { id } = req.params; //Guardamos el id que recibimos por request
    try {
    
        const Usuario = {
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
        await Usuario.findByIdAndUpdate(id,{$set: Usuario},{new: true}); // El new:true es para que en caso de que no exista lo cree
        res.json({
            status: 0,
            statusText: "Usuario actualizado"
        })
    }
    catch(erro){
        console.log("Actualizar Usuario ha fallado");
        res.json({
            satatus: -1,
            statusText: "Fallo al actualizar Usuario" 
        })
    }
};

/******** MÉTODOS DELETE  **********/
//DELETE: Eliminar un Usuario determinado 
usuariosCtrl.deleteUsuario = async (req, res) =>{
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        status: 0,
        statusText: "Usuario eliminado con exito"
    })
};







// Exportamos el controlador de usuarios
module.exports = usuariosCtrl;

    

