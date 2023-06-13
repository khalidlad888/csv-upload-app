//Setting up mongoose configuration
const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/csv-upload-app_database');

mongoose.connect('mongodb+srv://khalidlad888:Hackit.09@cluster0.rkpfjwr.mongodb.net/');


const db = mongoose.connection;

db.on('Error', console.error.bind(console, 'Error in connecting to database'));

db.once('open', function () {
    console.log("Connection to MongoDB successful");
});

module.exports = db;