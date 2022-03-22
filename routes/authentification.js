const express = require('express')
const router  = express.Router()

const AuthentificationController = require('../controllers/AuthentificationController')

router.post('/register', AuthentificationController.register)

module.exports = router 