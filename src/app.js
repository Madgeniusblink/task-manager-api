const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// parse for object | Works with 'req'
app.use(express.json())

// Routers
app.use(userRouter)
app.use(taskRouter)


module.exports = app