const Coche = require('../models/coches');
// import Coche from '../models/coches';



// Creamos un objeto que va a contener las funciones.
const cochesCtrl = {};


// // prueba
// cochesCtrl.getCoches = (req, res)=>{
//     res.json({
//         status: 'Coches van aquí'
//     })
// }

/******** MÉTODOS GET *********/
// GET: Todos los coches de la base de datos
cochesCtrl.findAllCoches = async (req, res) => {
    console.log(req + "\nTodo esta ok");
    const coches = await Coche.find();
    res.json(coches);
};

// GET: Coche con un id determinado
cochesCtrl.findByID = async (req, res) => {
    const id = req.params.id;

    try{
        const coche = await Coche.findById(id);
        res.json(coche); // Enviamos la respuesta
    }
    catch (error) {
        res.json({
            status: -1,
            statusText: "ID no encontrado"
        })
    }
};
/********** Buscar por marca*************/
cochesCtrl.findMarca = async (req, res) => {
    const marca = req.params.marca;
    try {
        const coches = await Coche.find({marca});
        res.json(coches);    // Enviamos la respuesta
    } 
    catch (error) {
        res.json({
            status: -1,
            statusText: "Marca no encontrada"
        })
    }
};
/********** Buscar por modelo*************/
cochesCtrl.findModelo = async (req, res) => {
    const modelo = req.params.modelo;
    try {
        const coches = await Coche.find({modelo});
        res.json(coches);    // Enviamos la respuesta
    } 
    catch (error) {
        res.json({
            status: -1,
            statusText: "Modelo no encontrado"
        })
    }
};


/********* METODOS POST: ***********/
//POST: Añadir un coche 
cochesCtrl.addCoche = async (req,res) => {
    console.log(req.body);

        
        // De esta forma no funciona bien el angular. No se muy bien el porque.
        // const coche = new Coche(req.body); // Creamos un nuevo objeto coche que recibimos en el body del request 
        
        
    try {
        const coche = new Coche({ // Creamos un nuevo objeto coche que recibimos en el body del request 
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
        await coche.save(); // Esto tambien puede tomar bastante tiempo por eso le ponemos el await
        console.log("Ok coche guardado\n");
        res.json({
            status: "Coche guardado" // Enviamos un mensaje de estado de guardado
        })
    } 
    catch (error) {
        // Enviamos un mensaje de estado de guardado
        res.json({
            status: -1,
            textStatus: "Algo ha ido mal al guardar un coche"
        })
    }
}

/*********** MÉTODOS PUT(Update) ***********/
// PUT: Modificar los datos de un coche determinado
//En los parametros de la búsqueda (req) vamos a poner el id de la película que queramos
cochesCtrl.updateCoche = async (req, res) => {
    const { id } = req.params; //Guardamos el id que recibimos por request
    try {
    
        const coche = {
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
        };
        await findByIdAndUpdate(id,{$set: coche},{new: true}); // El new:true es para que en caso de que no exista lo cree
        res.json({
            status: 0,
            statusText: "Coche actualizado"
        })
    }
    catch(erro){
        console.log("Actualizar coche ha fallado");
        res.json({
            satatus: -1,
            statusText: "Fallo al actualizar Coche" 
        })
    }
};

/******** MÉTODOS DELETE  **********/
//DELETE: Eliminar un coche determinado 
cochesCtrl.deleteCoche = async (req, res) =>{
    await Coche.findByIdAndRemove(req.params.id);
    res.json({
        status: 0,
        statusText: "Coche eliminado con exito"
    })
};


// Exportamos el controlador de coches
module.exports = cochesCtrl;

    

