const express = require('express')
const authRouter = express.Router()
const db = require('../../db')

const { encodeJWT } = require('../../utils/jwt')
const cookieProps = require('../../utils/cookie')

authRouter.post('/login', async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({
            error: "Login Failed"
        })
    }
    const user = db.users.find(u => u.email === email)
    if (!user) {
        return res.status(400).json({
            error: "No such user found"
        })
    }
    if (user.password !== password) {
        return res.status(401).json({
            error: "Incorrect password"
        })
    }
    const jwt = await encodeJWT({
        id: user.id
    })
    res.cookie(cookieProps.key, jwt, cookieProps.options)
    return res.status(200).end()
})

authRouter.get('/logout', (req, res) => {
    res.clearCookie(cookieProps.key, cookieProps.options)
    return res.status(200).end()
})

module.exports = authRouter