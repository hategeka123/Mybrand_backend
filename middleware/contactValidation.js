import joi from 'joi';

const contactValidation = (req, res, next) =>{
    const sigininSchama = joi.object().keys({
        name: joi.string().min(5).max(255).required(),
        email: joi.string().min(5).max(255).required().email(),
        content: joi.string().min(5).max(255).required(),
    })

    const { error } = sigininSchama.validate(req.body);
    if (error) return res.status(400).json({errors: error.details[0].message});
    next();

} 

export default contactValidation;