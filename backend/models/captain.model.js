const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength: [6, 'Password must be at least 6 characters long']
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1 person']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },
    location:{
        latitude:{
            type: Number,
        },
        longitude:{
            type: Number,
        }
    }

})

CaptainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

CaptainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

CaptainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const CaptainModel = mongoose.model('Captain', CaptainSchema);

module.exports = CaptainModel;