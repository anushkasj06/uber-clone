const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const isCaptainAlreadyExist = await CaptainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message: 'Captain already exist'});
    }

    const hashedPassword = await CaptainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = await captain.generateAuthToken();

    res.status(201).json({token, captain});

};

module.exports.loginCaptain = async (req, res, next) => {

    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()});
    }

    const {email, password} = req.body;

    const captain = await CaptainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isPasswordMatch = await captain.comparePassword(password);

    if(!isPasswordMatch){
        return res.status(400).json({message: 'Invalid password'});
    }

    const token = await captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({token, captain});

};


module.exports.getCaptainProfile = async (req, res, next) => {
    return res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    res.clearCookie('token');
    await blackListTokenModel.create({token});
    res.status(200).json({message: 'Logged out successfully'});
}


