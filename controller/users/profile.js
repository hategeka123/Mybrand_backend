import { verify } from 'jsonwebtoken'
import Users from '../../modeles/userModal'
import singleUser from '../../modeles/user';
import 'dotenv/config'

class Profile{
    static async getProfile(req, res){
     // get user data from token
     const bearer = req.headers.authorization
     let bearerToken = bearer.split(' ')[1];
     const data = verify(bearerToken, process.env.SECRITY_TOKEN)
     const userData = await singleUser.findOne({email: data.email});
     const profile = {
         _id:userData._id,
         name: userData.name,
         email: userData.email,
         role: userData.role
     }
     return res.status(200).json({status: 200, massege: 'This is my profile', profile});
    }
}

export default Profile;