// Creating Schema for user Database
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    Username:{
        type: String,
        required: true,
        unique: true
    },

    Email:{
        type: String,
        required: true,
        unique: true
    },

    Password:{
        type: String,
        required: true,
        unique: false
    },

    Role:{
        type: String,
        enum:['User', 'Artist'],
        default: 'User'
    }
})

// Creating Model for user Schema
const userModel=mongoose.model('user', userSchema);

module.exports=userModel;