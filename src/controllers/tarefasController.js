const tarefas = require('../models/tarefas.json');

function dataInclusaoDate(d) {
    const dataSplit = d.split('/')
    const datinha = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0])
    return datinha;
}
function dataConclusaoDate(c) {
    const dataSplitada = c.split('/')
    const datona = new Date(dataSplitada[2], dataSplitada[1] - 1, dataSplitada[0])
    return datona;
}
exports.get = (req, res) => {
    tarefas.forEach(tarefa => tarefa.dataInclusao = dataInclusaoDate(tarefa.dataInclusao));
    tarefas.forEach(tarefa => tarefa.dataConclusao = dataConclusaoDate(tarefa.dataConclusao));
    tarefas.sort(function (a, b) {
        if (a.dataInclusao < b.dataInclusao) {
            return 1;
        } else if (a.dataInclusao > b.dataInclusao) {
            return -1;
        } else {
            return 0;
        }
    })
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 4 || id <= 0) {
        res.redirect(301, "https://www.freecodecamp.org/")
    }
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
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

    
}

