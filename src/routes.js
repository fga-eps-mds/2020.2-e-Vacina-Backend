const express = require('express');
const routes = express.Router();

//controllers
const UserController = require('./controllers/UserController');

routes.get('/getUser', UserController.index);
routes.post('/postUser', UserController.create);


module.exports = routes;