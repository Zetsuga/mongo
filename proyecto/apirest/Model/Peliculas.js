const {Schema, model} = require("mongoose");

const peliculasSchema = new Schema({
    titulo:String,
    anioLanzamiento:Date,
    actores:[String],
    nacionalidad:String,
    director:[String],
    guionista:[String],
    lengua:String,
    plataforma:String,
    esMCU:Boolean,
    personajePrincipal:String,
    productora: String,
    distribuidora: String,
    genero :String,
    portada:String
})

module.exports = model("Peliculas", peliculasSchema,"peliculas");