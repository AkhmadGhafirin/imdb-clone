'use strict'
const express = require('express')
const UserController = require('../controllers/users')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.post('/register', authentication, UserController.register)
router.post('/login', UserController.login)

module.exports = router