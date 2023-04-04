const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/coches';

// Conectamos con esta extension
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error('ERROR database: ' + err));


// Exportamos esto para tener la conexión
module.exports = mongoose;