const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    plan: {
        type: String,
        default: 'Basic'
    },
   
});

module.exports = mongoose.model('User', userSchema);
