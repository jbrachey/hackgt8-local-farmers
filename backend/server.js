'use strict'
const express = require('express')
const http = require('http')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const socketio = require('socket.io')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser('COOKIE_SECRET'));
app.use(helmet())

app.use('/api', require('./api'));
app.get('/', (req, res) => {})

const server = http.createServer(app)
const io = socketio(server)

io.sockets.on('connect', () => {
    return app.set('socketio', io)
})

server.listen(8000, () => {
    console.log('Server started on Port: 8000')
})