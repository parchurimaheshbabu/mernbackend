
const mongoose = require('mongoose'); // import mongoose
require('dotenv/config');
const dbURL = process.env.CONNECTION_STRING; // get db url from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;