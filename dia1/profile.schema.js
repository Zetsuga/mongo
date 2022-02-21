const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth : Date,
    comments : String,
    rol : String
})

module.exports = mongoose.model("Profile", ProfileSchema,"Profile");