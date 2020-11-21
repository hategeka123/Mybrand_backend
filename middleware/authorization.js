import jwt from 'jsonwebtoken'
import Users from '../modeles/user'

require('dotenv').config()

class Authorize {
static userAuth (req, res, next){
 const bearer = req.headers.authorization
 if(!bearer){
     res.status(401).json({status:401, message: "Access Dinied"})
 }
 let bearerToken = bearer.split(' ')[1]
//  console.log(bearerToken)
 if (!bearerToken){
     return res.status(401).json({error: "please login first"})
 }
 try{
    const verfiedToken = jwt.verify(bearerToken, process.env.SECRITY_TOKEN) 
    req.user = verfiedToken
    console.log(process.env.SECRITY_TOKEN)
    return next()
 } catch(error){
     
     return res.status(403).json({error: error.message})
 }
}
static async  isAdmin (req, res, next){
    const { email} = req.user
        const user = await Users.find({email})
console.log(user)
if(user[0].role !== "admin") {
    return res.status(403).json({
        status:403,
        message : "Only admin is allowed"
    })
}   
return next()
}

}

export default Authorize