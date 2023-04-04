var mongoose = require('mongoose');
const {Schema} = mongoose;//Schema que va a modelar el objeto en la base de datos

// La serie va a ser un numero esquema de Mongoose


var coche = new Schema({
    marca:         {type: String, required: true},
    // marca:          String,
    modelo:         String,
    color:          String,
    etiqueta:       String,
    puertas:        Number,
    cv:             Number, 
    a_matricula:    Number,
    cantidad:       Number,
    precio:         Number,
    propulsion:{
        type:       String,
        enum:       ['Electrico', 'Diesel', 'Hibrido', 'Hidrogeno']
    },
    carroceria:{
        type:       String,
        enum:       ['Sedán', 'Berlina', 'SUV', 'Coupé', 'Cabrio', 'Familiar', 'Compacto', 'Monovolumen','Furgoneta','Furgon','Autocaravana', 'Pick Up', 'Clasico', 'Super deportivo']
    },
    traccion:{
        type:       String,
        enum:       ['FWD', 'RWD', 'AWD', '4WD', '4x4']
    }
});


// Exportarlo como module para poderlo utilizar en otro archivo

const Coche = mongoose.model('Coche', coche);

module.exports = Coche;    //Nombre del modulo