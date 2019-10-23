const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.get)
router.get('/concluido', controller.getConcluido)
router.get('/:nome', controller.getNome)
router.get('/:id', controller.getById)
router.get('/:id/colaborador', controller.getColaborador)

module.exports = router;