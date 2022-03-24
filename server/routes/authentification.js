const express = require('express')
const router  = express.Router()
const requireLogin = require('../middleware/requireLogin')



const AuthentificationController = require('../controllers/AuthentificationController')

router.post('/register', AuthentificationController.register)
router.post('/login',AuthentificationController.login)
router.get('/users',requireLogin,AuthentificationController.find_users)

module.exports = router 