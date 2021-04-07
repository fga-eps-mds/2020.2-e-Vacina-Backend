const { response } = require('express');
const express = require('express');

const ProfileController = require('../controllers/ProfileController');
const AuthMiddleware = require('../middlewares/auth');


const routes = express.Router();


routes.post('/:userId', AuthMiddleware ,ProfileController.createProfile);
routes.get('/:userId', AuthMiddleware, ProfileController.listProfiles);




module.exports = routes;