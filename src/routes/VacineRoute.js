const { response } = require('express');
const express = require('express');

const VacineController = require('../controllers/VacineController');


const routes = express.Router();


routes.post('/', VacineController.createVacine);



module.exports = routes;