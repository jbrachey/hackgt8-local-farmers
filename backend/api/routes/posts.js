const express = require('express')
const { posts } = require('../../db')
const db = require('../../db')
const middleware = require('../../utils/middleware')
const postsRouter = express.Router()

postsRouter.post('/create', (req, res) => {
    const post = req.body
    if (!post) {
        return res.status(400).json({
            error: 'Missing Information'
        })
    }
    if (!post.farmUserName) {
        return res.status(400).json({
            error: 'Missing Farm User Name'
        })
    }
    post.id = db.next()
    db.posts.push(post)
    db.print()
    return res.status(200).end()
})

postsRouter.get('/get/:farmUserName', (req, res) => {
    const farmUserName = req.params.farmUserName
    return res.json(db.posts.filter(f => f.farmUserName === farmUserName)).end()
})

postsRouter.get('/getFollowed/', middleware, (req, res) => {
    const user = res.sessionUser
    console.log(user)
    if (!user.follows)
        return res.json({}).end()
    return res.json(db.posts.filter(p => user.follows.includes(p.farmUserName))).end()
})

/*postsRouter.put('/update', (req, res) => {

})

postsRouter.delete('/delete/:id', (req, res) => {

})*/


module.exports = postsRouter