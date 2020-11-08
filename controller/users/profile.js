import jwt from 'jsonwebtoken'
import Users from '../../modeles/userModal'


class Profile{
    static getProfile(req, res){
     // get user data from token
     const bearer = req.headers.authorization
    //  console.log(bearer)
    const token = bearer.split(' ')[1]
     const bearerToken = bearer.split(' ')[1];
    //  console.log(bearerToken)
     jwt.verify(bearerToken, process.env.SECRITY_TOKEN, async (err, userData) => {
            if(userData){
            const profile = {id: userData.userId, email:userData.email, role:userData.role}
           return res.status(200).json({
               status:200, message:"My profile",profile
               })
            }
        })
        

    }
}

export default Profile