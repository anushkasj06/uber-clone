const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {  // Fixed typo here
            type: String,
            required: true,
            minlength: [2, 'First name must be at least 2 characters'],
        },
        lastname: {
            type: String,
            minlength: [2, 'Last name must be at least 2 characters'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
});

// Generate Auth Token
userSchema.methods.generateAuthToken = async function() {  // Fixed 'method' to 'methods'
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
};

// Compare Password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Hash Password
userSchema.statics.hashPassword = async function(password) {  // Fixed 'method' to 'methods'
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
