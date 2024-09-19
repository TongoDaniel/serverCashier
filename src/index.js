const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

const mongoose = require('mongoose')
require('dotenv').config()

const serverCashierRoute = require('./routes/serverCashier.route')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

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
