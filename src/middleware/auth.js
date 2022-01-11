const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '') //looks for the header the user provides
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //validates header
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }) //find associated user

        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next() //if auth successful
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' }) //if auth failed
    }
}

module.exports = auth