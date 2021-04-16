const express = require('express');

const ProfileController = require('../controllers/ProfileController');
const AuthMiddleware = require('../middlewares/auth');


const routes = express.Router();


routes.post('/:userId', AuthMiddleware ,ProfileController.createProfile);
routes.get('/list/:userId', AuthMiddleware, ProfileController.listProfilesByUser);
routes.get('/:profileId', AuthMiddleware, ProfileController.getProfileById);
routes.put('/:profileId', AuthMiddleware, ProfileController.updateProfile);
routes.delete('/:profileId/user/:userId', AuthMiddleware, ProfileController.deleteProfile);



module.exports = routes;