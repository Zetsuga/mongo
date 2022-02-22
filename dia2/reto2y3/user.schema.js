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
    follow :  String
})

module.exports = mongoose.model("User", UserSchema, "User");