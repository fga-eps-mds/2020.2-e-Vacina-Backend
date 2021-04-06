const { Router } = require('express');

// importar rotas
const userRoutes = require('./UserRoute');
const authRoutes = require('./AuthRoute');
const vacineRoutes = require('./VacineRoute');
//

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/vacine', vacineRoutes);





module.exports = routes;