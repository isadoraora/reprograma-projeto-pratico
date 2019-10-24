const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//Minhas rotas:
const index = require('./routes/index')
const tarefas = require('./routes/tarefasRoute')

app.use('/', index)
app.use('/tarefas', tarefas)
app.use(bodyParser.json())

module.exports = app;