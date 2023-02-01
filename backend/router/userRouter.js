const router = require('express').Router()
const userControler = require('../controller/user')
router.post('/api/createSession',userControler.CreateUser)
router.post('/api/login',userControler.VerifyUser)

module.exports = {userRouter:router}