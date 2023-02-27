const express = require('express')
const router = express.Router();

const controllers = require('../controller/authController')


router.post('/users', controllers.createUser)






module.exports = router;