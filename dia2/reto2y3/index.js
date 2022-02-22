const mongoose = require("mongoose");

let User = require("./user.schema");
let Photo = require("./photos.schema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});

function subirFoto(nombre,url,titulo,descripcion){

    let foto ={
        usuario : nombre,
        url: url,
        titulo: titulo,
        descripcion: descripcion
    };

    Photo.create(foto)
    .then((dato)=>{
        console.log("Foto guardada con éxito");
        console.log(dato);
    })
    .catch(()=>{
        console.log("Ha habido un error al guardar la foto")
    })

}

function obtenerFoto(nombre){

    Photo.find({usuario:nombre})
    .then((datos)=>{
        console.log(datos);
    })
    .catch(()=>{
        console.log("Ninguna foto encontrada")
    })
}

function seguir(origen,destino){
    User.findOneAndUpdate({name: origen},{follow:destino})
    .then((dato)=>{
        console.log(`El usuario ${origen} ya sigue a ${destino}`);
        console.log(dato);
    })
    .catch(()=>{
        console.log(`No se ha encontrado al usuario ${origen}`);
    })
}

function dejarSeguir(origen,destino){
    User.find({usuario:origen})
    .then((datos)=>{
        if(datos.length>0 && datos[0].follow == destino){
            User.updateOne({name:origen},{follow:""})
            .then((datos)=>{
                console.log(`El usuario ${origen} ha dejado de seguir a ${destino}`);
            })
            .catch(()=>{
                console.log("Error inesperado, no se ha podido dejar de seguir");
            })
        }
        
    })
    .catch(()=>{
        console.log("Ninguna relación encontrada")
    })
}

function eliminarFoto(nombre,titulo){
    Photo.deleteOne({usuario:nombre,titulo:titulo})
    .then((datos)=>{
        console.log("Foto borrada correctamente")
        console.log(datos);
    })
    .catch(()=>{
        console.log("Foto no encontrada, no seha borrado");
    })
}

function eliminarTodasFoto(nombre){
    Photo.deleteMany({usuario:nombre})
    .then((datos)=>{
        console.log("Foto borrada correctamente")
        console.log(datos);
    })
    .catch(()=>{
        console.log("Foto no encontrada, no seha borrado");
    })
}

//subirFoto("Jose","./imagen1.jpg","la demencia","Imagen de prueba");
//subirFoto("Oliver","./imagen1.jpg","estress","Imagen de prueba");
//subirFoto("Jose","./imagen1.jpg","Ira","Imagen de prueba");
//subirFoto("Jose","./imagen1.jpg","gula","Imagen de prueba");
//obtenerFoto("Jose");
//seguir("Jose","Oliver");
//dejarSeguir("Jose","Oliver");
//eliminarFoto("Jose","la demencia");
//eliminarTodasFoto("Jose");
