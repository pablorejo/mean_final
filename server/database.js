//////////////////////////////////////// Base de datos de los coches

const mongoose_coches = require('mongoose');
const URI_COCHES = 'mongodb://localhost:27017/coches';

// Conectamos con esta extension
mongoose_coches.connect(URI_COCHES);


// Exportamos esto para tener la conexión
mongoose_coches.exports = mongoose_coches;




// ////////////////////////////////// Base de datos de los usuarios
// const mongoose_usuarios = require('mongoose');
// const URI_USUARIOS = 'mongodb://localhost:27017/usuarios';

// // Conectamos con esta extension
// mongoose_usuarios.createConnection(URI_USUARIOS);


// // Exportamos esto para tener la conexión
// mongoose_usuarios.exports = mongoose_usuarios;



// ////////////////////////////////// Base de datos de los pedidos
// const mongoose_pedidos = require('mongoose');
// const URI_PEDIDOS = 'mongodb://localhost:27017/pedidos';

// // Conectamos con esta extension
// mongoose_pedidos.createConnection(URI_PEDIDOS);


// // Exportamos esto para tener la conexión
// mongoose_pedidos.exports = mongoose_pedidos;