const User = require('../models/user.model')

const getUsers = async (req, res) => {
    try {
        const items = await User.find()
        res.status(200).json({items})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsers
}