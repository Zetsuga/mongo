const Actores = require("../Model/Actores");

function getActores(request,response){
    console.log(request.query)
    if(request.query.id==null){
        Actores.find({})
        .then((datos)=>{
            response.send(datos)
        })
        .catch(()=>{
            response.send("-1")
        })
    }else{
        Actores.findById(request.query.id)
        .then((datos)=>{
            response.send(datos)
        })
        .catch(()=>{
            response.send("-1")
        })
    }
}

function guardarActores(request,response){
    
    let {nombre,edad,genero,peso,altura,colorPelo,colorOjo,
        raza,estaRetirado,nacionalidad,numeroOscar,profesion,foto} = request.body;
    console.log(request.body)
    let actor = new Actores({nombre,edad,genero,peso,altura,colorPelo,colorOjo,raza,estaRetirado,nacionalidad,numeroOscar,profesion,foto});

    console.log(actor)
    Actores.create(actor)
    .then((datos)=>{
        response.send(datos);
    })
    .catch(()=>{
        response.send("-1");
    })
}

function modificarActores(request,response){
    let coleccion = {};
    for(atributo in request.body) {
        if (request.body[atributo] != null && atributo != 'id') {
            coleccion[atributo] = request.body[atributo];
        }
    }
    Actores.updateOne({_id:request.body.id},coleccion)
    .then((datos)=>{
        response.send(String(datos.modifiedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}

function eliminarActores(request,response){
    Actores.deleteOne({_id:request.body.id})
    .then((datos)=>{
        response.send(String(datos.deletedCount));
    })
    .catch(()=>{
        response.send("-1");
    })
}



// const Fakerator = require('fakerator');
// const fakerator = Fakerator('es-ES');

// // Devuelve un profesional aleatorio
// function randomProfesional() {
//     return {
//         "nombre": fakerator.names.firstName(),
//         "edad": fakerator.date.age(20, 60),
//         "genero": fakerator.random.arrayElement(['Femenino', 'Masculino']),
//         "peso": fakerator.random.number(50, 90),
//         "altura": fakerator.random.number(150, 200),
//         "peloColor": fakerator.random.arrayElement(['Rubio', 'Negro', 'Castaño', 'Pelirrojo']),
//         "ojoColor": fakerator.random.arrayElement(['Negro', 'Azul', 'Castaño', 'Verde']),
//         "raza": fakerator.random.arrayElement(['Americana', 'Caucásica', 'Etiópica', 'Malaya', 'Mongólica']),
//         "estaRetirado": fakerator.random.boolean(),
//         "nacionalidad": fakerator.random.arrayElement(['Inglesa', 'Estadounidense', 'Española', 'Francesa', 'Alemana']),
//         "numeroOscar": fakerator.random.number(0, 5),
//         "profesion": fakerator.random.arrayElement(['Actor', 'Director', 'Guionista']),
//         "foto": 'https://picsum.photos/200/300'
//     }
// }

// let arrayACT = [];
// for(let i=0;i<10;i++){
//     let actor = randomProfesional();
//     arrayACT.push(actor)
// }

// Actores.insertMany(arrayACT)
// .then((datos)=>{

// })
// .catch(()=>{

// })
// console.log(arrayACT)


module.exports = {getActores,guardarActores,modificarActores,eliminarActores}