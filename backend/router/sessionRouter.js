const router = require('express').Router()
const sessionControler = require('../controller/session')
router.post('/api/createSession',sessionControler.Post)
router.get('/api/getSession',sessionControler.Get)
router.delete('/api/deleteSession',sessionControler.Delete)

module.exports = {sessionRouter:router}