const { Router } = require('express');

// importar rotas
const userRoutes = require('./UserRoute');
const authRoutes = require('./AuthRoute');
const profileRoutes = require('./ProfileRoute');
const vacineRoutes = require('./VacineRoute');
//

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/vacine', vacineRoutes);
routes.use('/profile', profileRoutes);





module.exports = routes;