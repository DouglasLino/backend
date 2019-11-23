const { Router } = require('express');
const router = Router();

// importo los modelos
const {getSalarios, createSalario ,getSalario , deleteSalario, updateSalario} =  require('../controllers/salario.controller')

router.route('/')
// obtengo LOS SALARIOS, en plural
.get(getSalarios)
// son para guardar un dato
.post(createSalario)

router.route('/:id')

// obtengo el salario
    .get(getSalario)
//actualizar todo el objeto
    .put(updateSalario)
// eliminar
    .delete(deleteSalario)


// actualiza una sola propiedad de un dato
// .patch()

module.exports = router;
