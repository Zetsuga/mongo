const Peliculas = require("../Model/Peliculas");

function getPeliculas(request,response){
    if(request.query.id==null){
        Peliculas.find({})
        .then((datos)=>{
            response.send(datos);
        })
        .catch(()=>{
            response.send("-1");
        })
    }else{
        Peliculas.findById(request.query.id)
        .then((datos)=>{
            response.send(datos);
        })
        .catch(()=>{
            response.send("-1");
        })
    }
}

function getActores(request,response){
    
    if(request.query.id!=null){
        Peliculas.findById(request.query.id)
        .then((datos)=>{
            response.send(datos.actores);
        })
        .catch(()=>{
            response.send("-1");
        })
    }else{
        response.send("-2");
    }
}
    

function getDirectores(request,response){
    if(request.query.id!=null){
        Peliculas.findById(request.query.id)
        .then((datos)=>{
            response.send(datos.director);
        })
        .catch(()=>{
            response.send("-1");
        })
    }else{
        response.send("-2");
    }
}

function getGuionistas(request,response){
    if(request.query.id!=null){
        Peliculas.findById(request.query.id)
        .then((datos)=>{
            response.send(datos.guionista);
        })
        .catch(()=>{
            response.send("-1");
        })
    }else{
        response.send("-2");
    }
}

function getProductora(request,response){
    if(request.query.id!=null){
        Peliculas.findById(request.query.id)
        .then((datos)=>{
            response.send(datos);
        })
        .catch(()=>{
            response.send("-1");
        })
    }else{
        response.send("-2");
    }
}

function guardarPeliculas(request,response){
    let {titulo,anioLanzamiento,actores,nacionalidad,director,guionista,lengua,
        plataforma,esMCU,personajePrincipal,productora,distribuidora,genero,portada} = request.body;
    
    let pelicula = new Peliculas({titulo,anioLanzamiento,actores,nacionalidad,director,guionista,lengua,
        plataforma,esMCU,personajePrincipal,productora,distribuidora,genero,portada});
    
    Peliculas.create(pelicula)
    .then((datos)=>{
        response.send(datos);
    })
    .catch(()=>{
        response.send("-1");
    })
}

function guardarActor(request,response){
    let actoresArray=[];
    Peliculas.findOne({_id:request.body.id})
    .then((datos)=>{
        actoresArray=datos.actores;
        actoresArray.push(request.body.actores);
        return Peliculas.updateOne({_id:request.body.id},{actores:actoresArray})
    })
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function guardardirector(request,response){
    let directorArray=[];
    Peliculas.findOne({_id:request.body.id})
    .then((datos)=>{
        directorArray=datos.director;
        directorArray.push(request.body.director);
        return Peliculas.updateOne({_id:request.body.id},{director:directorArray})
    })
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function guardarGuionista(request,response){
    let guionistaArray=[];
    Peliculas.findOne({_id:request.body.id})
    .then((datos)=>{
        guionistaArray=datos.guionista;
        guionistaArray.push(request.body.guionista);
        return Peliculas.updateOne({_id:request.body.id},{guionista:guionistaArray})
    })
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function modificarPeliculas(request,response){
    let {titulo,anioLanzamiento,nacionalidad,lengua, plataforma,esMCU,personajePrincipal,
        productora, distribuidora,genero,portada} = request.body;
    let objForUpdate = {};

    if(titulo != null) objForUpdate.titulo = titulo;
    if(anioLanzamiento != null) objForUpdate.anioLanzamiento = anioLanzamiento;
    if(nacionalidad != null) objForUpdate.nacionalidad = nacionalidad;
    if(lengua != null) objForUpdate.lengua = lengua;
    if(plataforma != null) objForUpdate.plataforma = plataforma;
    if(esMCU != null) objForUpdate.esMCU = esMCU;
    if(personajePrincipal != null) objForUpdate.personajePrincipal = personajePrincipal;
    if(productora != null) objForUpdate.productora = productora;
    if(distribuidora != null) objForUpdate.distribuidora = distribuidora;
    if(genero != null) objForUpdate.genero = genero;
    if(portada != null) objForUpdate.portada = portada;

    //objForUpdate = { $set: objForUpdate };

    Peliculas.updateOne({_id:request.body.id},objForUpdate)
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function eliminarPeliculas(request,response){
    Peliculas.deleteOne({_id:request.body.id})
    .then((datos)=>{
        response.send(String(datos.deletedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function eliminarActor(request,response){
    let actoresArray=[];
    Peliculas.findOne({_id:request.body.id})
    .then((datos)=>{
        for(let i=0;i<datos.actores.length;i++){
            if(datos.actores[i] != request.body.actores){
                actoresArray.push(datos.actores[i]);
            }
        }

        return Peliculas.updateOne({_id:request.body.id},{actores:actoresArray})
    })
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function eliminarDirector(request,response){
    let directorArray=[];
    Peliculas.findOne({_id:request.body.id})
    .then((datos)=>{
        for(let i=0;i<datos.director.length;i++){
            if(datos.director[i] != request.body.director){
                directorArray.push(datos.director[i]);
            }
        }

        return Peliculas.updateOne({_id:request.body.id},{director:directorArray})
    })
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function eliminarGuionista(request,response){
    let guionistaArray=[];
    Peliculas.findOne({_id:request.body.id})
    .then((datos)=>{
        for(let i=0;i<datos.guionista.length;i++){
            if(datos.guionista[i] != request.body.guionista){
                guionistaArray.push(datos.guionista[i]);
            }
        }

        return Peliculas.updateOne({_id:request.body.id},{guionista:guionistaArray})
    })
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

// const Fakerator = require('fakerator');
// const fakerator = Fakerator('es-ES');

// // Devuelve una película aleatoria
// function randomPelicula() {
//     let arrayActores = [];
//     let arrayDirectores = [];
//     let arrayGuionistas = [];
//     for (let i = 0; i < 3; i++) { 
//         arrayActores.push(fakerator.names.firstName());
//         arrayDirectores.push(fakerator.names.firstName());
//         arrayGuionistas.push(fakerator.names.firstName())
//     };
//     return {
//         titulo: fakerator.lorem.sentence(),
//         anioLanzamiento: fakerator.random.number(1980, 2022),
//         nacionalidad: fakerator.random.arrayElement(['Inglesa', 'Estadounidense', 'Española', 'Francesa', 'Alemana']),
//         lengua: fakerator.random.arrayElement(['Inglés', 'Español', 'Francés', 'Alemán']),
//         plataforma: fakerator.random.arrayElement(['Streaming', 'Cine', 'TV']),
//         esMCU: fakerator.random.boolean(),
//         personajePrincipal: fakerator.names.firstName(),
//         distribuidor: fakerator.random.arrayElement(['Sony', 'Walt Disney', 'Paramount', 'Warner Bros']),
//         genero: fakerator.random.arrayElement(['Acción', 'Aventuras', 'Ciencia Ficción', 'Comedia', 'Drama', 'Fantasía', 'Musical']),
//         productora: fakerator.random.arrayElement(['Columbia Pictures', '20th Century-Fox', 'Warner Bros', 'Paramount Pictures', 'Universal Pictures', 'Metro Goldwyn Mayer', 'United Artists', 'RKO Radio Pictures']),
//         actores: arrayActores,
//         directores: arrayDirectores,
//         guionistas: arrayGuionistas,
//         portada: 'https://picsum.photos/200/300'
//     }
// }
// let arrayPel = []

// for(i=0;i<10;i++){
//     arrayPel.push(randomPelicula());
// }

// Peliculas.insertMany(arrayPel)
// .then((datos)=>{

// })
// .catch(()=>{

// })


module.exports = {getPeliculas,getActores,getDirectores,getGuionistas,getProductora
,guardarActor,guardarPeliculas,guardardirector,guardarGuionista,modificarPeliculas
,eliminarPeliculas,eliminarActor,eliminarDirector,eliminarGuionista}