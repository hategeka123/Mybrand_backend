import express from 'express';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';


const app = express()
 const PORT = process.env.PORT
require('dotenv/config');
// Middleware

import postRoute from './routes/post';
import userRoute from './routes/users';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// connet to mongoose

const URI = "mongodb+srv://vianney:password!123@cluster0.mlhy0.mongodb.net/my_portfolio?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('mongodb connected successful!')})
.catch(err => console.log(err.message))

    // ROUTES
app.use('/api', postRoute);
app.use('/api', userRoute);
// app.use('/api/', signin),
// how to start listening the server

app.listen( PORT, ()=> {
    console.log(`server is running on ${PORT}...`)
});

export default app;