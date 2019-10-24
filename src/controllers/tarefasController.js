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
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}

exports.getConcluido = (req, res) => {
    const tarefasConcluidas = tarefas.filter(tarefa => {
        console.log(tarefa)
        return tarefa.concluido == "true"
    })
    const duties = tarefasConcluidas.map(tarefa => tarefa.descricao)

    res.status(200).send(duties)
}

exports.getNome = (req, res) => {
    const id = req.params.id
    const colaborador = tarefas.find(colaborador => colaborador.id == id)
    if (!colaborador) {
        res.send('Colaborador not found!')
    }
    const nome = colaborador.nomeColaborador
    res.send(nome)
}

// const datas = tarefas.sort(function (a, b) {
//     return new Date(a.dataAlteracao) - new Date(b.dataInclusao)
//     res.status(200).send(datas)
// });

exports.getData = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id) 
    const data = tarefa.dataInclusao
    const arrData = data.split('/')
    
    console.log(arrData)
}
