const router = require("express").Router()

const situacaoController = require("../controllers/SituacaoController")

router.route("/situacoes").post((req, res) => situacaoController.create(req, res))
//Post é usado para salvar formulario e enviar/savar arquivos (Salvar)
router.route("/situacoes").get((req, res) => situacaoController.getAll(req, res))
router.route("/situacoes/:id").get((req, res) => situacaoController.get(req, res))
//Get- geralmente usado para fazer algum tipo de pesquisa (consultar)
router.route("/situacoes/:id").put((req, res) => situacaoController.update(req, res))
//Put - utolizado para atualizar um/o registro
router.route("/situacoes/:id").delete((req, res) => situacaoController.delete(req, res))
//Delete - quando precisar remover
//OPTION - para fazer alguma verificação.
module.exports = router;