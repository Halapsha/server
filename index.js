require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')// для того чтобы можно было отправлять запросы с браузера
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const  PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json()) // Чтобы приложение могло парсить json формат
app.use(express.static(path.resolve(__dirname, 'static'))) // __dirname - это текущая директория
app.use(fileUpload({}))
app.use('/api', router)
// Обработка ошибок, последний Middleware
app.use(errorHandler)

// app.get('/', (req, res) =>{ /* Первый параметр это url по которому этот запрос будет отрабатывать.
//                                                    А вторым параметром функцию callback которая принимает параметрами запрос(req - request) и ответ (res - response)*/
//     res.status(200).json({message: 'WORNING!'})
// })


const start = async() => {
    try{
        await sequelize.authenticate() //  С помощью нее устанавливается подключение к бд
        await sequelize.sync() // Эта функция сверяет состояние бд со схемой данных которая описана ...чуть позже
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()