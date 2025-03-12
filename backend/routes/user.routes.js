const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:2}).withMessage('First Name must be 2 character length'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character length'),
], userController.registerUser)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character length'),
], userController.loginUser)


module.exports = router;
