const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')

router.post('/', typeController.create) // Чтобы Тип создавать
router.get('/', typeController.getAll)       // Чтобы Тип получать

module.exports = router