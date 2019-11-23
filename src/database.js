// 
const mongoose = require('mongoose');


// const URI = 'mongodb://localhost/mernstack'
// lo accede desde navegador, por el procces, env
// *****aqui le hace un if con la base por si no esta, se lo quite
const URI = process.env.MONGODB_URI;

// nos deja conectarnos a una instancia
mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    // ya no muestro el error largo que me salia
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB is connected');
});