'use strict'
const express = require('express')
const http = require('http')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const socketio = require('socket.io')
const cors = require('cors')

const app = express()

const cookieProps = require('./utils/cookie')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(cookieProps.secret));
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