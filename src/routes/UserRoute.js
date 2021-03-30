const express = require('express');

const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/auth');


const routes = express.Router();


routes.get('/', UserController.listUsers);
routes.get('/:userId', UserController.getUserById);
routes.post('/', UserController.createUser);
routes.put('/:userId', AuthMiddleware, UserController.updateUser);
routes.delete('/:userId', AuthMiddleware, UserController.deleteUser);


module.exports = routes;