const alunaController = require("../controllers/alunaController");
const estudioController = require("../controllers/estudioController");
const express = require("express");
const router = express.Router();

router.get("/listarestudios", estudioController.listar);
router.post("/cadastrarestudio", estudioController.criar);
router.post("/login", estudioController.login);
router.patch("/atualizardadosestudio",estudioController.alterar);
router.delete("/deletarestudio", estudioController.apagar);

router.get("/cadastradas", alunaController.listar);
router.get("/alunasmatriculadas/:id", alunaController.listaAlunaIdEstudio);
router.post("/cadastrar", alunaController.criar);


module.exports = router;
