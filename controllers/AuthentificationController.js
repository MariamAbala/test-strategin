const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const { use } = require('express/lib/application')

const register = (req, res, next) => {

    //hashing password 
    bcrypt.hash(req.body.mdp, 10, function(err,hashedMdp){
        if(err) {
            res.json({
                error : err
            })
        }

        let user = new User({
            email : req.body.email,
            mdp : hashedMdp
        })
        User.findOne({$or :[{email:user.email}]}).then( user_exist => {
            if(user_exist){
                res.json({
                    message : ' utilisateur déjà existe !'
                })
            }else{
                user.save().then(user =>{
                    res.json({
                        message: 'utilisateur ajouté avec succès !! '
                    })
                })
                .catch(err => {
                    res.json({
                        message : "Erreur lors de l'ajout d'un utilisateur "+err
                     })
                })
            }
        })
        
    })
    
}

const login = (req,res,next) => {
    let user = new User({
        email : req.body.email,
        mdp : req.body.mdp
    })

    User.findOne({$or :[{email:user.email}]}).then( user_found => {
        if(user_found){
            bcrypt.compare(user.mdp,user_found.mdp,function(err,result){
                if(err){
                    res.json({
                        error : err
                    })
                }
                if(result){
                    let token = jwt.sign({email : user_found.email},'**secretValue**',{expiresIn:'1h'})
                    res.json({
                        message:'utilisateur connecté !',
                        token
                    })
                }else{
                    res.json({
                        message : 'mot de passe / email invalide !! '
                    })
                }
            })
        }else{
            res.json({
                message : 'mot de passe / email invalide !!'
            })
        }
    })
    
};

module.exports = {
    register,
    login
}

