require('dotenv-safe').config()
const MONGO_DB = process.env.MONGO_DB
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const connect = async () => {
  try { await
    mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("banco conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
