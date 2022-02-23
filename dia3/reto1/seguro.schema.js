const mongoose = require("mongoose");

const SeguroSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni : String,
    matricula : String,
    fecha : Date,
    precio : Number 
})

module.exports = mongoose.model("Seguro", SeguroSchema);