const express = require('express');

const app = express();  //it returns a new instance of an Express application. This instance represents your web application and allows you to define routes, middleware, and other configurations.
app.use(express.json());//middle ware
const connectDB = require('./config/db');
require("dotenv/config");  //is typically used to load and configure environment variables from a .env file --CONFIG IS METHOD IN DOTENV 
const PORT = process.env.PORT;
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
