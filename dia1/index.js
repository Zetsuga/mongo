const mongoose = require("mongoose");

let User = require("./user.schema");
let Creedentials = require("./creedentials.schema");
let Profile = require("./profile.schema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});

let userDocument = new User({
    address : "Direccion 2",
    phone : "666666666",
    email : "2@2.com",
});

let profileDocument = new Profile({
    name : "Prueba",
    surname : "Prueba",
    dateOfBirth : "2021-12-31",
    comments : "Prueba prueba prueba",
    rol : "Usuario",
});

let creedentialsDocument = new Creedentials({
    login : "Jose",
    password : "12345",
})

userDocument.save(checkRespuesta)
profileDocument.save(checkRespuesta)
creedentialsDocument.save(checkRespuesta)
function checkRespuesta(err,res){
    console.log("dentro")
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Documento guardado correctamente");
    }
}

