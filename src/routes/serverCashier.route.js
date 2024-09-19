const express = require('express')
const serverCashierController = require('../controller/serverCashier.controller')
const router = express.Router()

router.get('/user', serverCashierController.postUser)
router.get('/users', serverCashierController.getUsers)
router.get('/products', serverCashierController.getProducts)
router.get('/categories', serverCashierController.getCategories)
router.get('/commands', serverCashierController.getCommands)
router.get('/command', serverCashierController.postCommand)
router.get('/accounts', serverCashierController.getAccounts)
router.get('/account', serverCashierController.postAccount)

module.exports = router

