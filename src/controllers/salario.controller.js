// const notesCtrl ={};
const salarioCtrl = {};

// importo el modelo salario
const Salario = require('../models/salario');

// aqui obtendria LOS SALARIOS = GET
salarioCtrl.getSalarios = async (req,res)=> {
    // vamos a consular a la BD
    // es una operacion asincrona tonces ocupamos callback o promesas
     //aqui me devuelve en un areglo
    const salarios = await Salario.find();
    res.json(salarios);
}

// aqui creo  el salario = POST
salarioCtrl.createSalario  = async (req,res)=> {
    // aqui esperamos a que el usuario le envie este json
    const { nombre, salario_original } = req.body;
    const newSalario = new Salario({
        nombre: nombre,
        salario_original: salario_original,
        // QUEMADOS
        renta: 100,
        iss: 200,
        afp: 300,
        salario_descuento: 1000
    });

    // aqui lo guardamos , como es asincrono va el await
    await newSalario.save();

    // console.log(newSalario);
    res.json({message: 'POSTS: Salario guardado'})
}


// ---- /:id

// aqui obtendria EL SALARIO
salarioCtrl.getSalario = async (req,res)=> {

    // aqui me devuelve todo el objeto
    const salario =  await Salario.findById(req.params.id);

    
    res.json(salario);
}

// actualizo el salario
salarioCtrl.updateSalario = async (req,res)=> {
    const {nombre,salario_original} = req.body;
    await Salario.findOneAndUpdate({_id: req.body.id},{
        nombre:nombre,
        salario_original:salario_original,
        // QUEMADOS
        renta:666,
        iss:666,
        afp:666,
        salario_descuento:666

    });

    console.log((req.params.id, req.body));



    res.json({message: '/:id Salario actualizado c:'})
}





// aqui ELIMINO el salario
salarioCtrl.deleteSalario  = async (req,res)=> {
   await Salario.findOneAndDelete(req.params.id);
    res.json({title: '/:id DELETED'})
}






// exporto los metodos
module.exports = salarioCtrl;