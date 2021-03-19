const express = require('express');

const UserController = require('../controllers/UserController');

const routes = express.Router();


routes.get('/', UserController.listUsers);
routes.get('/:userId', UserController.getUserById);
routes.post('/', UserController.createUser);

/*
routes.post('/', (requisition, response) => {
    UserController.createUser(requisition, response)   
});

routes.post('/authenticate', (requisition, response) => {
    
});

routes.put('/:userId',  (req, response) => {
    
});

routes.delete('/:userId', (req, response) => {
   
});*/

module.exports = routes;