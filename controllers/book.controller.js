const bookModel = require('../models/book.model');
const userModel = require('../models/user.model');

//add a new book
exports.addBook = async (req, res) => {
    const { name, category, publiser} = req.body;
    const book = await bookModel.insertMany({name, category, publiser, bookPhoto: req.file.filename});
    res.status(201).json({success: true, message: "Book added successfully"});
}

//get all books
exports.getAllBooks = async (req, res) => {
    const books = await bookModel.find().sort({createdAt: -1});
    res.status(200).json({success: true, data: books});
}