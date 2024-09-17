const express = require('express')
const serverCashierController = require('../controller/serverCashier.controller')
const router = express.Router()

router.get('/user', serverCashierController.getUsers)

module.exports = router

