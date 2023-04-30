const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})


var User = mongoose.model('Authentication', Schema);
module.exports = User;