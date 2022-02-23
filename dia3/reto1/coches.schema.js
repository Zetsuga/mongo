const mongoose = require("mongoose");

const CocheSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    matricula: String,
    seguro : {type: mongoose.Schema.Types.ObjectId, ref:"Seguro"}
})

module.exports = mongoose.model("Coche", CocheSchema);