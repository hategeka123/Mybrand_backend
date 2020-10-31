import joi from 'joi';

const userValidation = (req, res, next) =>{
    const userSchama = joi.object().keys({
        name: joi.string().min(5).max(50).required(),
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required()
    })

    const { error } = userSchama.validate(req.body);
    if (error) return res.status(400).json({errors: error.details[0].message});
    next();
}

export default userValidation;