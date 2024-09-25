const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    name: String,
    role: String,
    avatar: String,
})

const User = mongoose.model("users", UserSchema)

module.exports = User