const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    images: String,
    category_id: Number
},
{
    timestamps: true
})

const Product = mongoose.model("products", ProductSchema)

module.exports = Product