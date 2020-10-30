import fileUplaod from '../../modeles/Post';

const createPost = async(req, res) => {
    const {title, description, image} = req.body
    try{
      
        // res.status(201).json(blog)
        const newBlog =  new fileUplaod({
            title,
            description, 
            image
        })
         newBlog.save().then((data) =>{
            res.status(201).json({status:201, massage:'blog is created seccessful', data})
        })
    } catch(err){
        res.json({errors: err.message})
    }
}


export default createPost;