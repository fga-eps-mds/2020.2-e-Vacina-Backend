const express = require('express');

const VaccineController = require('../controllers/VaccineController');


const routes = express.Router();


routes.post('/', VaccineController.createVaccine);
routes.get('/', VaccineController.listVaccines);
routes.get('/:vaccineId', VaccineController.getVaccineById);
routes.put('/:vaccineId', VaccineController.updateVaccine);
routes.delete('/:vaccineId', VaccineController.deleteVaccine);


module.exports = routes;