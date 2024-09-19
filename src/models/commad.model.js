const mongoose = require('mongoose')

const CommandSchema = mongoose.Schema({
    // idCommand: Number,
    // orderProducts: [{
        idProduct: {
            type: String,
            require: true,
        },
        nameProduct: {
            type: String,
            require: true,
        },
        priceProduct: {
            type: Number,
            require: true,
        },
        amountProduct: {
            type: Number,
            require: true,
        },
        cash: {
            type: Number,
            require: true,
        },
        img: {
            type: String,
            require: true,
        },
    // }]
},
{
    timestamps: true
})

const Command = mongoose.model("commands", CommandSchema)

module.exports = Command