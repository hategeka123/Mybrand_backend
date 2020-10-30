import User from '../../modeles/user';
import bcrypt from 'bcrypt';

const user = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user  = await User.findOne({email});
    if (user) return res.status(409).json({status:409, message: `user with this email ${email} is already exist in db`})
    // hashingpassword  
    const hashedPassword =await  bcrypt.hash(password, 10)
    if (!hashedPassword) return res.status(400).json({status: 400, message:'bad request'})

    // save newuser in the database
    const newUser = new User ({
        name,
        email,
        password:hashedPassword
    })
     newUser.save().then((data) => {

         res.status(201).json({status: 201, message: 'User successful creared', data})
     })
    } catch (error) {
        res.status(400).json(error.message, error.name, error.stack)
    }
    
}

export default user;