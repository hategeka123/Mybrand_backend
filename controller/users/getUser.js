import signupUser from '../../modeles/user'

const allUser = async(req, res)=>{
    const user = await signupUser.find().exec();
    res.status(200).json({status:200, massage: "All user", users:user})
}

export default allUser;