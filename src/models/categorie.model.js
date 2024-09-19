const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String,
},
{
    timestamps: true
})

const Category = mongoose.model("categories", CategorySchema)

module.exports = Category