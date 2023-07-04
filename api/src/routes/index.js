const { Router } = require('express');
require('dotenv').config();

// Importar todos los routers;
const dogsRoutes = require('./routesDogs');
//const temperamentsRoutes = require('./routesTemperaments');
//const breedsRoutes = require('./routesBreeds');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/dogs", dogsRoutes);

//mainRouter.use('/', temperaments);
//mainRouter.use('/', breeds);

module.exports = mainRouter;

