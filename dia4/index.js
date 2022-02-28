//INICIALIZACIÓN DE LAS DEPENDENCIAS
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//IMPORTACION DE SCHEMAAS
let User = require("./user.schema");
let Photo = require("./photos.schema");

//CONFIGURACIÓN DE LA API
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//CONCTOR DE LA BD
mongoose.connect("mongodb://localhost:27017/codenotch",{
    useNewUrlParser: true, useUnifiedTopology:true
})


//INICIO DE LOS ENDPOINTS
app.get("/photos",function(request,response){
    if(request.query.nombre!=null){
        Photo.find({usuario:request.query.nombre})
        .then((datos)=>{
            console.log(datos);
            response.send(datos)
        })
        .catch((err)=>{
            response.send("Ninguna foto encontrada")
        })
    }else{
        response.send("Usuario no encontrado");
    }
})

app.post("/photos",function(request,response){
    let foto = {
        usuario: request.body.usuario,
        titulo: request.body.titulo,
        url: request.body.url,
        descripcion: request.body.descripcion
    }

    Photo.create(foto)
    .then((dato)=>{
        console.log("Foto guardada con éxito");
        response.send(dato);
    })
    .catch((err)=>{
        response.send("Ha habido un error al guardar la foto")
    })
})

app.put("/follow",function(request,response){
    let encontrado = false;
    let folloArray = [];
    User.findOne({name: request.body.origen})
    .populate("follow")
    .exec((err,res)=>{
        if(err){
            response.send("No encontrado el usuario");
        }else{
            res.follow.forEach(element => {
                if(element.name == request.body.destino){
                    encontrado = true;
                }else{
                    folloArray.push(element);
                }
            });
            if(encontrado){
                response.send("El usuario ya sigue a esa persona");
            }else{
                User.findOne({name: request.body.destino})
                .then((datos)=>{
                    if(datos!=null){
                        folloArray.push(datos);
                        return User.updateOne({name: request.body.origen},{follow:folloArray})
                    }else{
                        return "Usuario vacio";
                    }
                    
                })
                .then((datos)=>{
                    response.send(datos);
                })
                .catch((err)=>{
                    response.send("No existe el usuario a seguir")
                })
            }
        }
    })
})

app.put("/unfollow",function(request,response){
    let encontrado = false;
    let folloArray = [];
    User.findOne({name: request.body.origen})
    .populate("follow")
    .exec((err,res)=>{
        if(err){
            response.send("No encontrado el usuario");
        }else{
            res.follow.forEach(element => {
                if(element.name != request.body.destino){
                    folloArray.push(element);
                }
            });
            User.updateOne({name: request.body.origen},{follow:folloArray})
            .then((datos)=>{
                response.send(datos);
            })
            .catch((err)=>{
                response.send(err);
            })
        }
    })
})

app.delete("/photos",function(request,response){
    if(request.body.usuario!=null && request.body.titulo!=null){
        Photo.deleteOne({usuario:request.body.usuario,titulo:request.body.titulo})
        .then((datos)=>{
            console.log("Foto borrada correctamente")
            response.send(datos);
        })
        .catch((err)=>{
            response.send("Foto no encontrada, no se ha borrado");
        })
    }else if(request.body.usuario!=null){
        Photo.deleteMany({usuario:request.body.usuario})
        .then((datos)=>{
            console.log("Fotos borradas correctamente")
            response.send(datos);
        })
        .catch(()=>{
            response.send("Fotos no encontrada, no se ha borrado");
        })
    }else{
        response.send("Foto no encontrado");
    }
    
})

app.get("/timeline",function(request,response){
    let texto=``;
    if(request.query.id != null){
        User.findOne({_id:request.query.id}).populate([{path:"follow",populate:{path:"foto"}},"foto"]).exec((err,res)=>{
            if(err){
                response.send(err)
            }else{
                response.send(res);
            } 
        })
    }else{
        response.send("Usuario no encontrado")
    }
    
})


app.listen(3000);