import fileUplaod from '../../modeles/Post';

const singlePost = async (req, res)=>{
    const postaId = req.params.id;
    const singlePost = await fileUplaod.findById(postaId) 
    if(!singlePost) return res.status(404).json({status:404, message:`post with this id: ${postaId} not fund`})
    return res.status(200).json({status:200, singlePost})
}
export default singlePost;