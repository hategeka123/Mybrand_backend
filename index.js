import express from 'express';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';
import fileupload from 'express-fileupload'
const app = express()
 const PORT = process.env.PORT
require('dotenv/config');
// Middleware
import myRoute from './routes/route';
import userRoute from './routes/users';

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ limit: '500mb' ,extended: true }))
app.use(fileupload({useTempFiles:true}))


// connet to mongoose

const URI = "mongodb+srv://vianney:password!123@cluster0.mlhy0.mongodb.net/my_portfolio?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('mongodb connected successful!')})
.catch(err => console.log(err.message))

    // ROUTES
 app.use('/api', myRoute);   

app.use('/api', userRoute);
// how to start listening the server

app.listen( PORT, ()=> {
    console.log(`server is running on ${PORT}...`)
});

export default app;