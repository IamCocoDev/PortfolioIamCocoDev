const { Router } = require('express');
const metadata = require('./metadata')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routesManager = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routesManager.use('/metadata', metadata)


module.exports = routesManager;