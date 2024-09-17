const serverCashierRoute = require('./routes/serverCashier.route')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.use("/", serverCashierRoute)

// Connect to MongoDb

async function db() {
    try {
        const response = await mongoose.connect(process.env.MONGO_URL)
        console.log('Connect')
        app.listen(PORT, () => {
            console.log(`Server running on http:localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

db();

// const itemSchema = new mongoose.Schema({
//     id: Number,
//     name: String,
//     image: String
// })

// const Item = mongoose.model('users', itemSchema)

