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
    const user = req.body.user
    if (!user) {
        console.log("Failed to Create User")
    }
    if (db.users.find(u => u.email === user.email)) {
        console.log("User Already Exists")
    }
    user.id = db.next()
    db.users.push(user)
    res.statusCode(200)
})

userRouter.get('/get', (req, res) => {
    res.json(db.users)
})

userRouter.get('/get/:email', (req, res) => {
    const email = req.params.email
    res.json(db.users.find(u => u.email == email))
})

userRouter.get('/get/:id', (req, res) => {
    const id = req.params.id
    res.json(db.users.find(u => u.id == id))
})

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
    res.statusCode(200)
})

userRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.users.delete(u => u.id === id)
    res.statusCode(200)
})


module.exports = userRouter