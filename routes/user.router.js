const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

// get section
router.post('/signup', userController.signup);
