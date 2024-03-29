// config
require('dotenv').config()
const PORT = process.env.PORT || 8000
const DB_URL = process.env.DB_URL
const express = require('express')
const cors = require('cors')
const SocketServer = require('./socketServer')
const { PeerServer } = require('peer')
// const cookieParser = require('cookie-parser')
const app = express()
const socketIO = require('./io')
// Morgan
const morgan = require('morgan')
// Connect db
const { connectDB } = require('./src/config/db/db')
const router = require('./src/routers')
// connectDB(DB_URL)
connectDB(DB_URL).then((res) => {
  const http = require('http').createServer(app)
  const server = http.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
  })
  const io = require('./io').init(server)
  io.on('connection', (socket) => {
    SocketServer(socket)
  })
})
app.use(morgan('dev'))
// SocketIO (Option)
// const http = require('http').createServer(app)
// const io = require('socket.io')(http, {
//   cors: {
//     // origin: process.env.ORIGIN,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
// })
// connectDB(DB_URL)
// const io = require('./io').init(http)
// io.on('connection', (socket) => {
//   SocketServer(socket)
// })
// Peer
PeerServer({ port: 3001, path: '/' })
app.use(cors())
// app.use(cookieParser())
app.get('/', (req, res) => {
  res.json('hello')
})
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
//Routers
app.use('/api', router)
