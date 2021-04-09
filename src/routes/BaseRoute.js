const { Router } = require('express');

// importar rotas
const userRoutes = require('./UserRoute');
const authRoutes = require('./AuthRoute');
const vaccineRoutes = require('./VaccineRoute');
const takenVaccine = require('./TakenVaccine');
//

const routes = Router();

routes.use('/taken', takenVaccine);
routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/vaccine', vaccineRoutes);





module.exports = routes;