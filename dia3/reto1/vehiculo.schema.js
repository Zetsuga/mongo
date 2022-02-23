const mongoose = require("mongoose");

const VehiculoSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    matricula: String 
})

module.exports = mongoose.model("Vehiculo", VehiculoSchema);