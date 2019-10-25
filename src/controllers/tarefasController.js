const tarefas = require('../models/tarefas.json');

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 4 || id <= 0) {
        res.redirect(301, "https://www.freecodecamp.org/")
    }
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}
exports.getNome = (req, res) => {
    const nomeColab = req.params.nome
    res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nomeColab))
}

exports.getConcluido = (req, res) => {
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluido == "true")
    res.status(200).send(tarefasConcluidas)
}

exports.getColaborador = (req, res) => {
    const id = req.params.id
    const colaborador = tarefas.find(colaborador => colaborador.id == id)
    if (!colaborador) {
        res.send('Colaborador not found!')
    }
    const nome = colaborador.nomeColaborador
    res.send(nome)
}
exports.getData = (req, res) => {
    const dataIn = tarefas[1].dataInclusao
    const dataSplit = dataIn.split('/')
    const datinha = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0])
    res.status(200).send(datinha)

    //listar as tarefas por data de inclusão, das mais novas pras mais antigas
}



