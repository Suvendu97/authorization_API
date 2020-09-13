// require mongoose 
const mongoose = require('mongoose');

// USER SCHEMA
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    email: {
        type: String
    },
}, {
    timestamps: true
});

const USER = mongoose.model('USER', userSchema);

module.exports = USER;