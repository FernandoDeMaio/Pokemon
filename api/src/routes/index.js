const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const pokemonsRoutes= require('./pokemons');
const tiposRoutes= require('./tipos');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use( '/pokemons', pokemonsRoutes );
router.use( '/tipos', tiposRoutes);


module.exports = router;
