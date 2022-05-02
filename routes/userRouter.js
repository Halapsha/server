const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')


router.post('/registration', userController.registration ) // Чтобы  создавать
router.post('/login', userController.login)
router.get('/auth', userController.check)  // Чтобы получать

module.exports = router