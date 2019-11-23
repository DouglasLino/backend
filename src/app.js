// ************* npm run dev ********

const express = require('express');
const cors = require('cors');
// app es nuestro servidor
const app = express();

// settings = configurar el servidor

// aqui seteeo el puerto a escuchar
app.set('port', process.env.PORT || 4000);

// middlewares = funciones que se ejucuten antes de las rutas
// vamos a estar enviando archivos json
app.use(cors());
// aqui le decimos que entienda formatos json como strings
app.use(express.json());


// routes = las necesita react

// cada vez que accesan a esto, res = al mensaje
// app.get('/api/users',(req,res)=> res.send('Users Routers'));
// app.get('/api/notes',(req,res)=> res.send('Notes Routers'));





// ---- ESTAS RUTAS SERIAN
// metodo use
// al ingresar ese link, requiero esta ruta
app.use('/api/salarios',require('./routes/salarios'));
//app.use('/api/ingresar',require('./routes/ingresar'));





// lo exportamos
module.exports = app;