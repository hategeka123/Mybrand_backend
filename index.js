const express = require('express');

const bodyParser = require('body-parser')

const mongoose = require('mongoose');


// const bodyParser = require('body-parser');

const app = express();
require('dotenv/config');
// Middleware

const postRoute = require('./routes/post');

const user = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// connet to mongoose

const URI = "mongodb+srv://vianney:password!123@cluster0.mlhy0.mongodb.net/my_portfolio?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('mongodb connected successful!')})
.catch(err => console.log(err.message))

    // ROUTES
app.use('/api', postRoute);
app.use('/api', user);
// how to start listening the server

app.listen(3000);