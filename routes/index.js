const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const Mailer = require('./mailerRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/product', productRouter)
router.use('/access', Mailer)

module.exports = router