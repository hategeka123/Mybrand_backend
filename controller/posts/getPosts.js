import fileUplaod from '../../modeles/Post';
const allPosts = async(req, res)=>{
    const post = await fileUplaod.find().exec();
    res.status(200).json({status:200, message:"All posts", posts:post})
    }
    
     export default allPosts;