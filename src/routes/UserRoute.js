const express = require('express');

const UserController = require('../controllers/UserController');

const routes = express.Router();


routes.get('/', UserController.listUsers);
routes.get('/:userId', UserController.getUserById);
routes.post('/', UserController.createUser);
routes.put('/:userId', UserController.updateUser);


module.exports = routes;