const mongoose = require("mongoose");

let User = require("./user.schema");
let Photo = require("./photos.schema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: true, useUnifiedTopology:true});

// let fotoArray = [];
// let usuarioArray = [];

// let foto1={
//     usuario: "Jose",
//     url: "esto es una url 1",
//     titulo: "titulo1",
//     descripcion: "Esto es una descripcion de una imagen",
// }
// let foto2={
//     usuario: "Jose",
//     url: "esto es una url 2",
//     titulo: "titulo2",
//     descripcion: "Esto es una descripcion de una imagen",
// }

// let foto3={
//     usuario: "Oliver",
//     url: "esto es una url 3",
//     titulo: "titulo3",
//     descripcion: "Esto es una descripcion de una imagen",
// }

// let foto4={
//     usuario: "Oliver",
//     url: "esto es una url 4",
//     titulo: "titulo4",
//     descripcion: "Esto es una descripcion de una imagen",
// }
// let foto5={
//     usuario: "Lucia",
//     url: "esto es una url 5",
//     titulo: "titulo5",
//     descripcion: "Esto es una descripcion de una imagen",
// }

// let foto6={
//     usuario: "Lucia",
//     url: "esto es una url 6",
//     titulo: "titulo6",
//     descripcion: "Esto es una descripcion de una imagen",
// }

// Photo.create(foto1)
// .then((dato)=>{
//     fotoArray.push(dato._id);
//     console.log("Foto guardada");
//     return Photo.create(foto2);
// })
// .then((dato)=>{
//     fotoArray.push(dato._id);
//     console.log("Foto guardada");
//     return Photo.create(foto3);
// })
// .then((dato)=>{
//     fotoArray.push(dato._id);
//     console.log("Foto guardada");
//     return Photo.create(foto4);
// })
// .then((dato)=>{
//     fotoArray.push(dato._id);
//     console.log("Foto guardada");
//     return Photo.create(foto5);
// })
// .then((dato)=>{
//     fotoArray.push(dato._id);
//     console.log("Foto guardada");
//     return Photo.create(foto6);
// })
// .then((dato)=>{
//     fotoArray.push(dato._id);
//     console.log("Usuario guardada");
//     let usuario1 ={
//         login: "jose",
//         password: "jose",
//         name: "jose",
//         surname: "Ors",
//         dateOfBirth : "2021-12-31",
//         comments : "Esto es un cmentario",
//         rol : "admin",
//         address : "estoes una direccion de prueba",
//         phone : "333333333",
//         email : "1@1.com",
//         follow :  [],
//         foto : [fotoArray[0],fotoArray[1]]
//     }
//     return User.create(usuario1)
// })
// .then((dato)=>{
//     usuarioArray.push(dato._id);
//     console.log("Usuario guardada");
//     let usuario2 ={
//         login: "oliver",
//         password: "oliver",
//         name: "oliver",
//         surname: "mata",
//         dateOfBirth : "2021-12-31",
//         comments : "Esto es un cmentario",
//         rol : "admin",
//         address : "estoes una direccion de prueba",
//         phone : "666666666",
//         email : "2@2.com",
//         follow :  [],
//         foto : [fotoArray[2],fotoArray[3]]
//     }
//     return User.create(usuario2)
// })
// .then((dato)=>{
//     usuarioArray.push(dato._id);
//     console.log("Usuario guardada");
//     let usuario3 ={
//         login: "Lucia",
//         password: "Lucia",
//         name: "Lucia",
//         surname: "garcia",
//         dateOfBirth : "2021-12-31",
//         comments : "Esto es un cmentario",
//         rol : "admin",
//         address : "estoes una direccion de prueba",
//         phone : "666666666",
//         email : "2@2.com",
//         follow :  [],
//         foto : [fotoArray[4],fotoArray[5]]
//     }
//     return User.create(usuario3)
// })
// .then((dato)=>{
//     usuarioArray.push(dato._id);
//     console.log("Usuario guardada");
//     return User.updateOne({name:"jose"},{follow:[usuarioArray[1],usuarioArray[2]]})
// })
// .then((dato)=>{
//     console.log("Usuario modificado");
//     return User.updateOne({name:"oliver"},{follow:[usuarioArray[0],usuarioArray[2]]})
// })
// .then((dato)=>{
//     console.log("Usuario modificado");
//     return User.updateOne({name:"Lucia"},{follow:[usuarioArray[0]]})
// })
// .then((dato)=>{
//     console.log("Usuario modificado");
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar")
// })

// User.findOne({name:"jose"}).populate("foto").exec((err,usuario)=>{
//     console.log(usuario.name)
//     if(err){
//         console.log(err)
//     }else{
//         let texto =`El usuario ${usuario.name} ${usuario.surname} con las siguientes fotos `;
        
//         for(atributo in usuario.foto){
//             texto+=`nombre: ${usuario.foto[atributo].titulo}\nUrl: ${usuario.foto[atributo].url}\n\n`;
//         }
//         console.log(texto);
//     }
// });

function timeLine(busqueda){
    User.findOne({_id:busqueda}).populate("follow").exec((err,seguidor)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`El usuario ${seguidor.name} ${seguidor.surname} sigue a\n`);
            for(atributo in seguidor.follow){
                
                for(let i=0;i<seguidor.follow[atributo].foto.length;i++){
                    Photo.findById(seguidor.follow[atributo].foto[i])
                    .then((datos)=>{
                        console.log(`${seguidor.follow[atributo].name} ${seguidor.follow[atributo].surname}`);
                        console.log(`nombre: ${datos.titulo}\nUrl: ${datos.url}\n`);
                    })
                    .catch(()=>{
                        console.log("Ha habido un error en la busqueda")
                    })
                }
            }
        } 
    })
}

timeLine("62164affa8a946e661041174");

