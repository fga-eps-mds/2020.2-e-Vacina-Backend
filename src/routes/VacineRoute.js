const { response } = require('express');
const express = require('express');

const VacineController = require('../controllers/VacineController');


const routes = express.Router();


routes.post('/', VacineController.createVacine);
routes.get('/', VacineController.listVacines);
routes.get('/:vacineId', VacineController.getVacineById);
routes.put('/:vacineId', VacineController.updateVacine);
routes.delete('/:vacineId', VacineController.deleteVacine);


module.exports = routes;