const alunaModel = require("../model/alunaModel");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const listar = async (req, res) => {   
  try {
    const listarAlunas = await alunaModel.find({}, ["-matriculada", "-estudio"]);
    res.status(200).json(listarAlunas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const listaAlunaIdEstudio = async (req, res) => {
    try {
      const authHeader = req.get("authorization");
        const token = authHeader?.split(" ")[1] ?? ("Não autorizado");
        if (!token) {
            return res.status(401).json({
                message: "Erro de header"
            });
        }
        const error = jwt.verify(token, SECRET, (error) => {
            if (error) return error;
        });
        if (error) return res.status(401).json({
            message: "Não autorizado"
        });
      const listaAluna = await alunaModel.findById(req.params.id).populate(
        "estudios"
      );
      if (listaAluna == null) {
        res.status(404).json({ mensagem: "Estudio não encontrado" });
      }
      res.status(200).json(listaAluna);
    } catch (error) {
      res.status(500).json({ mensagem: error.message });
    };
  };

const criar = (req, res) => {
  const {nomeAluna, idade, raca_cor, telefone, email, zonaUrbanaSP, matriculada, estudio} = req.body
  console.log(req.body);

  const cadastro = new cadastradas ({
    nomeAluna,
    idade,
    raca_cor,
    telefone,
    email,
    zonaUrbanaSP,
    matriculada,
    estudio,  
  });

  cadastro.save(function (err) {
    if (err) {
      return res.status(500)
      }

     res.status(201).send(cadastro.toJSON());
  });
};

module.exports = {
  listaAlunaIdEstudio,
  listar,
  criar,

}

