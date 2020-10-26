const joi = require('joi');
const postValidation = (req, res, next)=>{

    const postSchema = joi.object().keys({
       title:joi.string().required(),
       description:joi.string().required()
    })
    const { error } = postSchema.validate(req.body);
    if (error) return res.status(400).json({errors: error.details[0].message});
    next();
}

module.exports = postValidation