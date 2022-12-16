const estudioModel = require("../model/estudioModel");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const listar = async (req, res) => {
  try {
    const listarEstudios = await estudioModel.find({});
    res.status(200).json(listarEstudios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const criar = (req, res) => {
  try {
    const senhaHash = bcrypt.hashSync(req.body.senha, 10);
    const { login, nomeEstudio, rua, numero, bairro, email, zonaUrbanaSP, quantidadeVagas } = req.body
    console.log(req.body);
    req.body.senha = senhaHash

    const cadastro = new estudioModel({
      login,
      senha: senhaHash,
      nomeEstudio,
      rua,
      numero,
      bairro,
      email,
      zonaUrbanaSP,
      quantidadeVagas,
    });

    cadastro.save()
    res.status(201).send(cadastro);
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const login = (req, res) => {
  estudioModel.findOne({ login: req.body.login }, function (error, estudio) {
    if (error) {
      return res.status(500).send({
        message: "Header não encontrado"
      });
    }
    if (!estudio) {
      return res.status(404).send({
        message: `login ${req.body.login} não encontrada`
      });
    }
const senhaValida = bcrypt.compareSync(req.body.senha, estudio.senha);
console.log(senhaValida)
    if (!senhaValida) {
      return res.status(403).send({
        message: "Senha inválida"
      });
    }
    const token = jwt.sign({ login: req.body.login }, SECRET);
    return res.status(200).send(token);
  });
};

const alterar = async (req, res) => {
  try {
    const {
      login,
      senha,
      nomeEstudio,
      rua,
      numero,
      bairro,
      email,
      zonaUrbanaSP,
      quantidadeVagas,
    } = req.body;
    const atualizarDadosEstudio = await estudioModel.findByIdAndUpdate(
      req.params.id,
      {
        login,
        senha,
        nomeEstudio,
        rua,
        numero,
        bairro,
        email,
        zonaUrbanaSP,
        quantidadeVagas,
      }
    );
    res.status(200).json(atualizarDadosEstudio);
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const apagar = async (req, res) => {
  try {
    const { id } = req.params;
    const estudio = await estudioModel.findById(id);

    if (estudio == null) {
      return res.status(404).json({ message: `estudio com id ${id} não foi encontrado` })
    };
    await estudio.remove();
    res.status(200).json({ message: `estudio com id ${id} foi deletado com sucesso` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  listar,
  criar,
  login,
  alterar,
  apagar,
}