const mongoose = require("mongoose");

//relacion mucho a mucho
let Casa = require("./casa.schema");
let Persona = require("./persona.schema");

//relacion uno a uno
let Seguro = require("./seguro.schema");
let Coche = require("./coches.schema");

//relacion uno a mucho
let Conductor = require("./conductor.schema");
let Vehiculo = require("./vehiculo.schema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: true, useUnifiedTopology:true});


//RELACION 1 A 1

// let seguro1 ={
//     nombre: "Jose",
//     apellido: "Ors",
//     dni : "7777777",
//     matricula : "7878MLK",
//     fecha : "2021-11-12",
//     precio : "20" 
// };

// let seguro2 ={
//     nombre: "Luis",
//     apellido: "Garcia",
//     dni : "666666",
//     matricula : "5669LYH",
//     fecha : "2020-11-12",
//     precio : "240" 
// };

// Seguro.create(seguro1)
// .then((dato)=>{
//     console.log(dato);
//     console.log("Seguro guardado con éxito");
//     let coche1 ={
//         marca: "Audi",
//         modelo: "A3",
//         matricula: "7878MLK",
//         seguro : dato._id
//     }
    
//     return Coche.create(coche1);
// })
// .then((dato)=>{
//     console.log("Coche guardado con éxito")
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar el coche")
// })

// Seguro.create(seguro2)
// .then((dato)=>{
//     console.log("Seguro guardado con éxito");
//     let coche2 ={
//         marca: "seat",
//         modelo: "Ibiza",
//         matricula: "5669LYH",
//         seguro : dato._id
//     }
//     console.log(dato);
//     return Coche.create(coche2);
// })
// .then((dato)=>{
//     console.log("Coche guardado con éxito")
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar el coche")
// })

// Coche.find({marca:"seat"}).populate("seguro").exec((err,coche)=>{
//     if(err){
//         console-log(err);
//         process.exit(-1);
//     }
//     console.log(coche);
// });
// Coche.find({marca:"Audi"}).populate("seguro").exec((err,coche)=>{
//     if(err){
//         console-log(err);
//         process.exit(-1);
//     }
//     console.log(coche);
// });

//                       RELACION 1 A MUCHOS

// let coche1 ={
//     marca: "Audi",
//     modelo: "A3",
//     matricula: "7878MLK"
// }

// let coche2 ={
//     marca: "seat",
//     modelo: "Ibiza",
//     matricula: "5669LYH",
// }

// let coche3 ={
//     marca: "Hiunday",
//     modelo: "Kona",
//     matricula: "7587PPG",
// }

// let arrayCoches = [];

// Vehiculo.create(coche1)
// .then((dato)=>{
//     console.log("coche guardado con éxito");
//     arrayCoches.push(dato._id);
//     console.log(arrayCoches)
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar el coche");
// });

// Vehiculo.create(coche2)
// .then((dato)=>{
//     console.log("coche guardado con éxito");
//     arrayCoches.push(dato._id);
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar el coche")
// })

// Vehiculo.create(coche3)
// .then((dato)=>{
//     console.log("coche guardado con éxito");
//     arrayCoches.push(dato._id);
//     let conductor1 = {
//         nombre: "Jose",
//         apellido: "Ors",
//         age : "41",
//         dni : "77777777",
//         vehiculo : arrayCoches
//     }
//     return Conductor.create(conductor1);
// })
// .then((dato)=>{
//     console.log("Conductor guardado con éxito");
//     arrayCoches.push(dato._id);
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar el coche")
// })

// Conductor.findOne({nombre:"Jose"}).populate("vehiculo").exec((err,cond)=>{
//     if(err){
//         console-log(err);
//         process.exit(-1);
//     }
//     console.log(`El conductor ${cond.nombre} tiene varios coches`+
//     ` que son: ${cond.vehiculo[0].marca},${cond.vehiculo[2].marca},${cond.vehiculo[2].marca} `);
// });Array.l


//                       RELACION MUCHOS A MUCHOS

// let personaArray=[];
// let casaArray = [];

// let persona1 = {
//     nombre: "Jose",
//     apellido: "Ors",
//     age : "41",
//     dni : "77777777",
//     casa:[]
// }

// let persona2 = {
//     nombre: "Lucia",
//     apellido: "Garcia",
//     age : "55",
//     dni : "1111111",
//     casa:[]
// }

// let persona3 = {
//     nombre: "Oliver",
//     apellido: "Mata",
//     age : "37",
//     dni : "6666666",
//     casa:[]
// }

// Persona.create(persona1)
// .then((dato)=>{
//     console.log("persona guardado con éxito");
//     personaArray.push(dato._id);
//     return Persona.create(persona2)
// })
// .then((dato)=>{
//     console.log("persona guardado con éxito");
//     personaArray.push(dato._id);
//     return Persona.create(persona3)
// })
// .then((dato)=>{
//     console.log("persona guardado con éxito");
//     personaArray.push(dato._id);
//     let casa1 ={
//         habitaciones: 3,
//         direccion: "Algun sitio 1",
//         tipoVivienda: "atico",
//         persona:[personaArray[0],personaArray[1]]
//     }
//     return Casa.create(casa1)
// })
// .then((dato)=>{
//     console.log("Casa guardado con éxito");
//     casaArray.push(dato._id);
//     let casa2 ={
//         habitaciones: 1,
//         direccion: "Algun sitio 2",
//         tipoVivienda: "chalet",
//         persona:[personaArray[1],personaArray[2]]
//     }
//     return Casa.create(casa2)
// })
// .then((dato)=>{
//     console.log("Casa guardado con éxito");
//     casaArray.push(dato._id);
//     let casa3 ={
//         habitaciones: 2,
//         direccion: "Algun sitio 3",
//         tipoVivienda: "piso",
//         persona:[personaArray[0],personaArray[2]]
//     }
//     return Casa.create(casa3)
// })
// .then((dato)=>{
//     console.log("Casa guardado con éxito");
//     casaArray.push(dato._id);
//     return Persona.updateOne({name:"Jose"},{casa:[casaArray[0],casaArray[1]]});
// })
// .then((dato)=>{
//     console.log("Persona actualizada con éxito");
//     return Persona.updateOne({name:"Lucia"},{casa:[casaArray[1],casaArray[2]]});
// })
// .then((dato)=>{
//     console.log("Persona actualizada con éxito");
//     return Persona.updateOne({name:"Oliver"},{casa:[casaArray[0],casaArray[2]]});
// })
// .then((dato)=>{
//     console.log("Persona actualizada con éxito");
// })
// .catch(()=>{
//     console.log("Ha habido un error al guardar el coche")
// })


// Persona.findOne({nombre:"Jose"}).populate("casa").exec((err,person)=>{
//     if(err){
//         console-log(err);
//         process.exit(-1);
//     }
//     console.log(person);
//     console.log(`El usuario ${person.nombre} vive en ${person.casa[0].direccion} y ${person.casa[1].direccion}`);
// });

