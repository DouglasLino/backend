const { Router } = require('express');
const router = Router();

// cada vez que visiten el /api/ por el metodo get
router.route('/')
.get((req,res)=> res.send('ingresar Routes'))

module.exports = router;
