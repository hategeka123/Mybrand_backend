 
const createPost = (req, res) => {
    console.log(req.body)
    try{
        const { title, description } = req.body;
        const blog = { title, description };
        
        res.status(201).json(blog)
    } catch(err){
        res.json({errors: err.message})
    }
}

module.exports = createPost;