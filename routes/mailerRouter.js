const Router = require('express')
const router = new Router()
const mailerController = require('../controller/mailerController')

router.post('/', mailerController.mail)

module.exports = router