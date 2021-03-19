const express = require('express');
const routes = express.Router();

//controllers
const UserController = require('./controllers/UserController');

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);


module.exports = routes;