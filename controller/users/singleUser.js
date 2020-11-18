import singleUser from '../../modeles/user';

const oneUser = async (req, res) =>{
    const userId = req.params.id
    const oneUser = await singleUser.findById(userId)
    if(!oneUser) return res.status(404).json({status:404, message:`user with this id: ${userId} not fund`})
    return res.status(200).json({status:200, oneUser})
}

export default oneUser;