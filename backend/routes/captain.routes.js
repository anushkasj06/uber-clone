const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:2}).withMessage('First Name must be 2 character length'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character length'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be 3 character length'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be 3 character length'),
    body('vehicle.capacity').isNumeric({min:1}).withMessage('Capacity must be a latest 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],
    captainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character length'),
], captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.post('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);


module.exports = router;