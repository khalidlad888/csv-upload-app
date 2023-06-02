const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.use(express.static('./assets'));


const expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setting view engine using ejs template
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the port', err);
    };

    console.log('Express server is runnig on port:', port);
});
