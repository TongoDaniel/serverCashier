const User = require('../models/user.model')
const Product = require('../models/product.model')
const Account = require('../models/account.model')
const Command = require('../models/commad.model')
const Category = require('../models/categorie.model')

const getUsers = async (req, res) => {
    try {
        const items = await User.find()
        res.status(200).json([...items])
    } catch (error) {
        console.log(error)
    }
}
const postUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
}
const putUser = async (req, res) => {
    try {
        const updateItem = await User.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true})
        res.json(updateItem)
    } catch (error) {
        console.log(error)
    }
}
const deleteUser = async (req, res) => {
    console.log(req.params.id)
    try {
        await User.deleteOne({ _id: req.params.id })
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}

const getProducts = async (req, res) => {
    try {
        const items = await Product.find()
        res.status(200).json([...items])
    } catch (error) {
        console.log(error)
    }
}
const putProduct = async (req, res) => {
    try {
        const updateItem = await Product.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true})
        res.json(updateItem)
    } catch (error) {
        console.log(error)
    }
}
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}

const getCategories = async (req, res) => {
    try {
        const items = await Category.find()
        res.status(200).json([...items])
    } catch (error) {
        console.log(error)
    }
}

const getCommands = async (req, res) => {
    try {
        const items = await Command.find()
        res.status(200).json([...items])
    } catch (error) {
        console.log(error)
    }
}
const postCommand = async (req, res) => {
    try {
        const newItems = new Command(req.body)
        await newItems.save()
        res.json(newItems)
    } catch (error) {
        console.log(error)
    }
}

const getAccounts = async (req, res) => {
    try {
        const items = await Account.find()
        res.status(200).json([...items])
    } catch (error) {
        console.log(error)
    }
}
const postAccount = async (req, res) => {
    try {
        const newItems = new Account(req.body)
        await newItems.save()
        res.json(newItems)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,

    getProducts,
    putProduct,
    deleteProduct,

    getCategories,

    getCommands,
    postCommand,

    getAccounts,
    postAccount,
}