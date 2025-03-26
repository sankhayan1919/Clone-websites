const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 } && { max: 20 }).withMessage('First name must be between 3 and 20 characters'),
    body('password').isLength({ min: 6 } ).withMessage('Password must be at least 6 characters long')
], 
    userController.registerUser
)
module.exports = router;