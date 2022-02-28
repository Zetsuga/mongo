const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    surname: String,
    dateOfBirth : Date,
    comments : String,
    rol : String,
    address : String,
    phone : String,
    email : String,
    follow :  [{type: mongoose.Schema.Types.ObjectId, ref:"Usuario"}],
    foto : [{type: mongoose.Schema.Types.ObjectId, ref:"Photo"}]
})

module.exports = mongoose.model("Usuario", UserSchema);