const joi = require('joi');

const userValidation = (req, res, next) =>{
    const userSchama = joi.object().keys({
        name:joi.string().required(),
        email:joi.string().required(). email(),
        password:joi.string().required()
    })

    const { error } = userSchama.validate(req.body);
    if (error) return res.status(400).json({errors: error.details[0].message});
    next();
}

module.exports = userValidation