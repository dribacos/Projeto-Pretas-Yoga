const alunaController = require("../controllers/alunaController");
const estudioController = require("../controllers/estudioController");
const express = require("express");
const router = express.Router();

//rotas estudio
router.get("/listarEstudios", estudioController.listar);
router.post("/cadastrarEstudio", estudioController.criar);
router.post("/login", estudioController.login);
router.patch("/atualizarDadosEstudio",estudioController.alterar);
router.delete("/deletarEstudio", estudioController.apagar);

//rotas alunas
router.get("/cadastradas", alunaController.listar);
router.get("/alunasMatriculadas/:id", alunaController.listaAlunaIdEstudio);
router.post("/cadastrar", alunaController.criar);

//router.patch("/atualizarDadosAluna",alunaController.alterar);

module.exports = router;
