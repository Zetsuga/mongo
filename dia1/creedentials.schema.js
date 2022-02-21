const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    login: String,
    password: String
})

module.exports = mongoose.model("Creedentials", CreedentialsSchema,"Creedentials");