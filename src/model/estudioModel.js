const mongoose = require("mongoose");

const EstudioSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        login: {
            type: String,
            required:true,
        },
        senha: {
            type: String,
            required: true,
        },
        nomeEstudio: {
            type: String,
            required: true,
        },
        rua: {
            type: String,
            required: true,
        },
        numero: {
            type: Number,
            required: true,
        },
        bairro: {
            type: String,
            required: true,
        },
        zonaUrbanaSP: {
            type: String,
            required: true,
        },
        quantidadeVagas: {
            type: Number,
            required: true,
            ref: "alunas"
        }
    },
);

const EstudioModel = mongoose.model("estudios", EstudioSchema);

module.exports = EstudioModel;