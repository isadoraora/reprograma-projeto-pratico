const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.get)
router.get('/concluido', controller.getConcluido)
router.get('/:nome', controller.getNome)
router.get('/:id', controller.getById)

router.get('/:id/colaborador', controller.getNome)
router.get('/data', controller.getData)
// router.post('/dataAlteracao', controller.getDataAlteracao)

router.get('/:id/colaborador', controller.getColaborador)
router.get('/datas', controller.getDatas)
//router.post('/', controller.post)


module.exports = router;