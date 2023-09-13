const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Name must be at least 3 characters long'],
        maxLength: [30, 'Name must be at most 30 characters long'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: 13,
        maxLength: 13
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetToken : {
        type: String,
    },
    issuedBooks : {
        type: Array,
        default: []
    }
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;