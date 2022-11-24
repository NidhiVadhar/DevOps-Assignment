const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const Route = express.Router();

Route.post('/login', authController.login);
Route.post('/signup', authController.signup);
Route.get('/logout', authController.logout);
Route.post('/contactForm', userController.contactForm);

module.exports = Route;
