const app = require('./src/app')
const bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false     }))

app.listen(port, function () {
    console.log(`App rodando na porta ${port}`)
})