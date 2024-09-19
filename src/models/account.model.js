const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
    idCaissier: String,
    idCommande: String,
    date: String,
},
{
    timestamps: true
})

const Account = mongoose.model("accounts", AccountSchema)

module.exports = Account