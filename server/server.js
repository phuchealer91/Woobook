// config
require('dotenv').config()
const PORT = process.env.PORT || 8000
const DB_URL = process.env.DB_URL
const express = require('express')
const cors = require('cors')
// const cookieParser = require('cookie-parser')
const app = express()
// Morgan
const morgan = require('morgan')
// Connect db
const { connectDB } = require('./src/config/db/db')
const router = require('./src/routers')
connectDB(DB_URL).then((res) => {
  const server = app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
  })
  const io = require('./io').init(server)
  io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnect`)
    })
  })
})
app.use(morgan('dev'))
// SocketIO (Option)
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.use(cors())
// app.use(cookieParser())
app.get('/', (req, res) => {
  res.json('hello')
})
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
//Routers
app.use('/api', router)
