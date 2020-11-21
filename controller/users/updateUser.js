import User from '../../modeles/user'
const updateUser = async (req, res) => {
const id = req.params.id
const singleUser = await User.findById(id);
if(!singleUser) return res.status(404).json({status:404, message:`user with this id: ${userId} not fund`});
await Object.assign(singleUser, req.body).save((error, data) => {
    if(error) return res.status(400).json({err:error.message})
     return res.status(200).json({status:200, message:"Skill successful updated", data})
})
}
export default updateUser;