const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    address : String,
    phone : String,
    email : String
})

module.exports = mongoose.model("User", UserSchema, "User");