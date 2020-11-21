import joi from 'joi';
const skillValidation = (req, res, next)=>{

    const postSchema = joi.object().keys({
        title:joi.string().min(5).required(),
        skillImage:joi.string(),
        description:joi.string().required()
    })
    const { error } = postSchema.validate(req.body);
    if (error) return res.status(400).json({errors: error.details[0].message});
    next();
}

export default skillValidation;