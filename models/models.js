const sequalize = require('../db')
const {DataTypes} = require('sequelize') // Для описывания типа полей

const User = sequalize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique:true },
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Product = sequalize.define('product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    des: {type: DataTypes.STRING},
    size: {type: DataTypes.STRING},
    size2: {type: DataTypes.STRING},
    size3: {type: DataTypes.STRING},
    size4: {type: DataTypes.STRING},
})

const Type = sequalize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductInfo = sequalize.define('product_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    size: {type: DataTypes.STRING}
})

// Связь
Product.hasMany(ProductInfo, {as:'info'}) // Одна запись содержит много записей с харакетристиками 1:М
ProductInfo.belongsTo(Product)  // Эта сущность принадлежит Продукту

Type.hasMany(Product)
Product.belongsTo(Type)

module.exports = {
    User, Product, ProductInfo, Type
}