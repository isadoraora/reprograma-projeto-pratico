const express = require('express')
const app = express()

//Minhas rotas:
const index = require('./routes/index')
const tarefas = require('./routes/tarefasRoute')

app.use('/', index)
app.use('/tarefas', tarefas)

module.exports = app;