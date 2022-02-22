const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type : String,
        enum : ["Jose","Laura","Enrique","Luis","Oliver","Oscar","Maria","Claudia","Jimena"]
    },
    surname: String,
    dateOfBirth : {
        type : Date,
        min : "1970-01-01",
        max : "2004-01-01"
    },
    comments : String,
    rol : {
        type : String,
        enum : ["admin","user"]
    }
})

module.exports = mongoose.model("Profile", ProfileSchema,"Profile");