const express = require('express');

const VaccineController = require('../controllers/VaccineController');
const AuthMiddleware = require('../middlewares/auth');



const routes = express.Router();


routes.post('/', AuthMiddleware, VaccineController.createVaccine);
routes.get('/', VaccineController.listVaccines);
routes.get('/:vaccineId', VaccineController.getVaccineById);
routes.put('/:vaccineId', AuthMiddleware, VaccineController.updateVaccine);
routes.delete('/:vaccineId', AuthMiddleware, VaccineController.deleteVaccine);


module.exports = routes;