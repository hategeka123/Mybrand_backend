const joi = require('joi');

const signinValidation = (req, res, next) =>{
    const sigininSchama = joi.object().keys({
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required()
    })

    const { error } = sigininSchama.validate(req.body);
    if (error) return res.status(400).json({errors: error.details[0].message});
    next();

} 

module.exports = signinValidation