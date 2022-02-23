const mongoose = require("mongoose");

const ConductorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    age : Number,
    dni : String,
    vehiculo : [{type: mongoose.Schema.Types.ObjectId, ref:"Vehiculo"}]
})

module.exports = mongoose.model("Conductor", ConductorSchema);
