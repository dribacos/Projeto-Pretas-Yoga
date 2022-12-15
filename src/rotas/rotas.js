const alunaController = require("../controllers/alunaController");
const estudioController = require("../controllers/estudioController");
const express = require("express");
const router = express.Router();

router.get("/listarEstudios", estudioController.listar);
router.post("/cadastrarEstudio", estudioController.criar);
router.post("/login", estudioController.login);
router.patch("/atualizarDadosEstudio",estudioController.alterar);
router.delete("/deletarEstudio", estudioController.apagar);

router.get("/cadastradas", alunaController.listar);
router.get("/alunasMatriculadas/:id", alunaController.listaAlunaIdEstudio);
router.post("/cadastrar", alunaController.criar);


module.exports = router;
