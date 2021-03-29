const { Router } = require('express');

// importar rotas
const userRoutes = require('./UserRoute');
const authRoutes = require('./AuthRoute');
//

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);




module.exports = routes;