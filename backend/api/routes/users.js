const express = require('express')
const userRouter = express.Router()

const db = require('../../db')

/*
User {
    id,
    name,
    email,
    password,
    type (consumer, producer)
    follows: [Farms]
}
*/

userRouter.post('/create', (req, res) => {
    const user = req.body
    if (!user) {
        return res.status(401).json({
            error: 'Missing Information'
        })
    }
    if (db.users.find(u => u.email === user.email)) {
        return res.status(401).json({
            error: 'User already exists'
        })
    }
    user.id = db.next()
    db.users.push(user)
    return res.status(200).end()
})

userRouter.get('/get', (req, res) => {
    return res.json(db.users).end()
})

userRouter.get('/get/:email', (req, res) => {
    const email = req.params.email
    return res.json(db.users.find(u => u.email === email)).end()
})

userRouter.get('/get/:id', (req, res) => {
    const id = req.params.id
    res.json(db.users.find(u => u.id == id)).end()
})

/*
Blocked Endpoints

userRouter.put('/update', (req, res) => {
    const user = req.body.user
    const existing = db.users.find(u => u.email === user.email)
    const id = existing.id
    if (existing) {
        db.users.delete(existing)
        user.id = id
        db.users.push(user)
    } else {
        console.log('User updating failed because user does not exist')
    }
    return res.status(200).end()
})

userRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.users.delete(u => u.id === id)
    return res.status(200).end()
})
*/


module.exports = userRouter