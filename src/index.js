const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const serverCashierRoute = require('./routes/serverCashier.route')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json())
require('dotenv').config()

// Connect to MongoDb

async function db() {
    try {
        const response = await mongoose.connect(process.env.MONGO_URL)
        app.use('/', serverCashierRoute)
        console.log('Connect')
        app.listen(PORT, () => {
            console.log(`Server running on http:localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

db();
