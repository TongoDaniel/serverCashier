const express = require('express')
const serverCashierController = require('../controller/serverCashier.controller')
const router = express.Router()

router.get('/users', serverCashierController.getUsers)
router.post('/addUser', serverCashierController.postUser)
router.put('/updateUser/:id', serverCashierController.putUser)
router.delete('/deleteUser/:id', serverCashierController.deleteUser)

router.get('/products', serverCashierController.getProducts)
router.put('/updateProduct/:id', serverCashierController.putProduct)
router.delete('/deleteProduct/:id', serverCashierController.deleteProduct)

router.get('/categories', serverCashierController.getCategories)

router.get('/commands', serverCashierController.getCommands)
router.post('/command', serverCashierController.postCommand)

router.get('/accounts', serverCashierController.getAccounts)
router.post('/account', serverCashierController.postAccount)

module.exports = router

