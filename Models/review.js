const mongoose = require('mongoose');



const Schema = mongoose.Schema({
    review:{
        type: String,
    }
})


var User_Review = mongoose.model('Review', Schema);
module.exports = User_Review;