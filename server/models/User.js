const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    mdp : {
        type:String,
        required : true,
        select : false
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User