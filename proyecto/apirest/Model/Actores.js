const mongoose = require("mongoose");

const actoresSchema = new mongoose.Schema({
    nombre:String,
    edad:Number,
    genero:String,
    peso:Number,
    altura:Number,
    colorPelo:String,
    colorOjo:String,
    raza:String,
    estaRetirado:Boolean,
    nacionalidad:String,
    numeroOscar: Number,
    profesion: String,
    foto:String
})

module.exports = mongoose.model("Actores", actoresSchema,"actores");