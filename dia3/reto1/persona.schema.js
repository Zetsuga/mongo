const mongoose = require("mongoose");

const PersonaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    age : Number,
    dni : String,
    casa : [{type: mongoose.Schema.Types.ObjectId, ref:"Casa"}]
})

module.exports = mongoose.model("Persona", PersonaSchema);
