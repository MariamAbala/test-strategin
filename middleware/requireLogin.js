const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const User = require('../models/User')

module.exports = (req,res,next) =>{
    const {authorization} = req.headers
    if(!authorization){
       return res.json({
            error : " Vous devez etre connecté ayeeeh!! "
        })
    }
    const token = authorization.replace("Bearer ","")

    jwt.verify(token,"**secretValue**",(err, payload)=>{
        if(err){
            return res.json({
                error : "Vous devez etre connecté !!"
            })
        }

        const {email} = payload
        User.findOne({$or :[{email:email}]}).then( userdata => {
            req.user = userdata

        })
        next()


    })
}