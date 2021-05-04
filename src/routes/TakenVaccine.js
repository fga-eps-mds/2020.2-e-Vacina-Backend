 const express = require('express');

 const TakenVaccineController = require('../controllers/TakenVaccineController');


 const routes = express.Router();


 routes.post('/', TakenVaccineController.createTakenVaccine);
 routes.get('/', TakenVaccineController.listTakenVaccines);
 routes.get('/:takenVaccineId', TakenVaccineController.getTakenVaccineById);
 routes.get('/p/:profileId', TakenVaccineController.getTakenVaccineByProfile);
 routes.put('/:takenVaccineId', TakenVaccineController.updateTakenVaccine);
 routes.delete('/:takenVaccineId', TakenVaccineController.deleteTakenVaccine);

 module.exports = routes;