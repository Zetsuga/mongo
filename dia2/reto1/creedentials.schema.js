const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    login: String,
    password: {
        type : String,
        validate : [
            function(password){
                return password.length >5;
            },
            "La contraseña tiene que ser más larga de 5 caracteres"
        ]
    }
})

CreedentialsSchema.pre("save",function(next){
    console.log("Middleware check running");
    if(this.password == "123456"){
        console.log("Middleware check Error, Contraseña muy onvia 123456")
    }else{
        console.log("Middleware check Ok")
        next();
    }
});

module.exports = mongoose.model("Creedentials", CreedentialsSchema,"Creedentials");