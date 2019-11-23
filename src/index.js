// antes de iniciar la app para que esten disponible
require('dotenv').config();


// aqui lo exportamos, osea lo mandamos a llamar
const app = require('./app');
require('./database');

// funcion principal para iniciar el programa
async function main(){
    // este es un metodo asincrono
        // app.get('port') = obtener el valor de port
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();

