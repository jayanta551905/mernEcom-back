const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email is required']
    },
    firstName:{
        type: String,
        trim: true,
        required: [true, 'First name is required']
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'Last name is required']
    },
    mobile:{
        type: String,
        trim: true,
        required: [true, 'Phone number is required']
    },
    address:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    photo:{
        type: String
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
    role:{
        type: Number,
        default: 0
    }
},{timestamps:true,versionKey:false});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;