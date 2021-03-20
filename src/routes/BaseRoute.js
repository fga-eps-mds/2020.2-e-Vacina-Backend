const { Router } = require('express');

// importar rotas
const userRoutes = require('./UserRoute');
//

const routes = Router();

routes.use('/user', userRoutes);




module.exports = routes;