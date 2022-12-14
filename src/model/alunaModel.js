const mongoose = require("mongoose");

const alunaSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        nomeAluna: {
            type: String,
            required: true,
        },
        idade: {
            type: Number,
            required: true,
        },
        raca_cor: {
            type: String,
            required: true,
        },
        telefone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        zonaUrbanaSP: {
            type: String,
            required: true,
        },
        matriculada: {
            type: Boolean,
            required: true,
        },
        estudio: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "estudios"
        }
    },
);

const AlunaModel = mongoose.model("alunas", alunaSchema);

module.exports = AlunaModel;