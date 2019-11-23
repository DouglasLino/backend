// que campos quiero guardar en la base
// mongose para modelar los datos

//schema = lo que yo quiero guardar de los datos = unicos, string, numeros
// modelo = como realmente va a consultar los datos
const {Schema, model} = require('mongoose');

const salarioSchema = new Schema({
    nombre: {
        type: String,
        // eliminar los espacios
        trim: true
    },
    salario_original: Number,
    renta: Number,
    iss: Number,
    afp: Number,
    salario_descuento: Number
});


module.exports = model('Salario', salarioSchema);