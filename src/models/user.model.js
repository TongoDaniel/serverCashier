const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    name: String,
    role: String,
    avatar: String,
},
{
    timestamps: true
})

const User = mongoose.model("users", UserSchema)

module.exports = User