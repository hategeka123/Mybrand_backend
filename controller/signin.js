const User = require('../modeles/user');
const bcrypt = require('bcrypt');

const signin = async (req, res) => {
    const { email, password } = req.body
    try{
        const userExist = await User.find({email});
        if (!userExist) return res.status(404).json({status:404, message: ` use collect email`})
        bcrypt.compare(password, userExist.password, (err, result) => {
            if(!result) return res.status(400).json({status:400, message: 'password incorrect'})
            res.json({status:200, message:'login successful', result})
        })        
    } catch(err) {
        console.log(err);
        res.status(400).json(err.message, err.name, err.stack)
    }
    
}

module.exports = signin;