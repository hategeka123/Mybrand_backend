import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../modeles/user';
require('dotenv').config()

const signin = async (req, res) => {
    const { email, password } = req.body
    try{
        // checking if user exist
        const userExist = await User.find({email});
        if (!userExist) return res.status(404).json({status:404, message: ` use collect email`})
        // checking stored password if is the same as what user is entering
        bcrypt.compare(password, userExist[0].password, (err, result) => {
            if(!result) return res.status(400).json({status:400, message: 'password incorrect'})
            // creating tokens for storing user data
            jwt.sign({name:userExist[0].name, email:userExist[0].email}, process.env.SECRITY_TOKEN, (error, data) => {

                res.json({status:200, message:'login successful', token:data})
            })
        })        
    } catch(error) {
        console.log(error.message);
        // res.status(400).json(err.message,error.name, err.stack)
    }
    
}

export default signin;