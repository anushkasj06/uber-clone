const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const blackListTokenModel = require("../models/blacklistToken.model");   
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports.authUser = async (req, res, next) => {
    // Extract token from cookies or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const isBlacklisted = await blackListTokenModel.findOne({tokens: token});
    
    if (isBlacklisted) return res.status(401).json({ message: "Unauthorized" });

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by ID from the decoded token
        const user = await userModel.findById(decoded._id);
        if (!user) return res.status(401).json({ message: "User not found" });

        // Attach user to the request object
        req.user = user;
        return next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        res.status(401).json({ message: "Unauthorized" });
    }
}


module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    console.log(token);

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const isBlacklisted = await blackListTokenModel.findOne({tokens: token});
    console.log(isBlacklisted);

    if (isBlacklisted) return res.status(401).json({ message: "Unauthorized" });

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        console.log(captain);
        if(!captain) return res.status(401).json({ message: "Captain not found" });
        req.captain = captain;
        return next();
    }catch(error){
        console.error("Token verification failed:", error.message);
        res.status(401).json({ message: "Unauthorized" });
    }
}