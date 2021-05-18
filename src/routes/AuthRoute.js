const express = require('express');
const AuthController = require('../controllers/AuthController');
const routes = express.Router();


routes.post('/login', AuthController.login);
routes.post('/loginAdmin', AuthController.loginAdmin);

module.exports = routes;