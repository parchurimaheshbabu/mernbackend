const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Name must be at least 3 characters long'],
        maxLength: [30, 'Name must be at most 30 characters long']
    },

    category: {
        type: String,
        required: true,
        minLength: [3, 'Category must be at least 3 characters long'],
        maxLength: [30, 'Category must be at most 30 characters long']
    },

    publisher: {
        type: String,
    },

    bookPhoto: {
        type: String,
    },

    isIssued: {
        type: Boolean,
        default: false
    },

    issuedBookUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    issuedDate: {
        type: Date,
    },

    returnDate: {
        type: Date,
    },

    late: {
        type: Number,
        default: 0
    },

    fine: {
        type: Number,
        default: 0
    },

}, {timestamps: true});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;