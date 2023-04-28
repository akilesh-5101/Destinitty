const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/user', {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log('mongodb connected');
}).catch((error) =>{
    console.log('Failed to connect ' + error);
})

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