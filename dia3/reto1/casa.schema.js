const mongoose = require("mongoose");

const CasaSchema = new mongoose.Schema({
    habitaciones: Number,
    direccion: String,
    tipoVivienda: String,
    persona : [{type: mongoose.Schema.Types.ObjectId, ref:"Persona"}]
})

module.exports = mongoose.model("Casa", CasaSchema);