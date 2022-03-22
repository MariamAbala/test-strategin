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
    })

    
}

module.exports = {
    register
}

