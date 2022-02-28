class Actores {

    constructor(name, age, genre, weight, height, hairColor, eyeColor, 
        race, isRetired, nationality, oscarsNumber, profession,image){
        this.nombre = name;
        this.edad = age;
        this.genero = genre;
        this.peso = weight
        this.altura = height
        this.colorPelo = hairColor
        this.colorOjo = eyeColor
        this.raza = race
        this.estaRetirado = isRetired
        this.nacionalidad = nationality
        this.numeroOscar = oscarsNumber
        this.profesion = profession
        this.foto = image;
    }
}

function pintarDatosActores(actores){
    let html="";

    actores.forEach((datos)=>{

        html += `<div class="col-xs-12 col-sm-6 col-md-4">`
            + `<div class="card">`
            + `<img class="card-img-top img-fluid imagen__pelicula" src="${datos.foto}" alt="${datos.titulo}">`
            + `<div class="card-body">`
            +  `<h5 class="card-title">${datos.nombre}</h5>`
            +  `<p class="card-text">`
            +   `Edad: ${datos.edad}<br>`
            +   `Genero: ${datos.genero}<br>`
            +   `Peso: ${datos.peso}<br>`
            +   `Altura: ${datos.altura}<br>`
            +   `Color de pelo: ${datos.colorPelo}<br>` 
            +   `color de ojos: ${datos.colorOjo}<br>` 
            +   `Raza: ${datos.raza}<br>` 
            +   `¿Está retirado?: ${datos.estaRetirado}<br>` 
            +   `Nacionalidadl: ${datos.nacionalidad}<br>` 
            +   `numero de Oscars: ${datos.numeroOscar}<br>`
            +   `Profesión: ${datos.profesion}<br>`
            + `</p>`
            + `</div>`
            + `</div>`
            +`</div>`;
    })
    document.getElementById("peliculas").innerHTML = html;
}

function datosActor(){
    let element;
    let correcto = true;

    if(document.getElementById("nombre").value == ""){
        element = document.getElementById("nombre");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("edad").value == ""){
        element = document.getElementById("edad");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("genero").value == ""){
        element = document.getElementById("genero");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("peso").value == ""){
        element = document.getElementById("peso");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("altura").value == ""){
        element = document.getElementById("altura");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("colorPelo").value == ""){
        element = document.getElementById("colorPelo");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("colorOjo").value == ""){
        element = document.getElementById("colorOjo");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("raza").value == ""){
        element = document.getElementById("raza");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("nacionalidad").value == ""){
        element = document.getElementById("nacionalidad");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("numeroOscar").value == ""){
        element = document.getElementById("numeroOscar");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("profesion").value == ""){
        element = document.getElementById("profesion");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("foto").value == ""){
        element = document.getElementById("foto");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    
    if(correcto){
        let nombre =  document.getElementById("nombre").value; 
        let edad =  document.getElementById("edad").value; 
        let genero =  document.getElementById("genero").value; 
        let peso =  document.getElementById("peso").value; 
        let estaRetirado =  document.getElementById("estaRetirado").value;
        estaRetirado=(estaRetirado=="Si")?true:false; 
        let altura =  document.getElementById("altura").value; 
        let colorPelo =  document.getElementById("colorPelo").value; 
        let colorOjo =  document.getElementById("colorOjo").value; 
        let raza =  document.getElementById("raza").value; 
        let nacionalidad =  document.getElementById("nacionalidad").value;
        let numeroOscar =  document.getElementById("numeroOscar").value; 
        let profesion =  document.getElementById("profesion").value; 
        let foto =  document.getElementById("foto").value; 
 
        return new Actores(nombre,edad,genero,peso,altura,colorPelo,colorOjo,
            raza,estaRetirado,nacionalidad,numeroOscar,profesion,foto);
    }else{
        return null;
    } 
}

function buscarActor(){
    let id = document.getElementById("indice").value;

    if(id===""){
        url =`http://127.0.0.1:3000/profesionales`;
    }else{
        url =`http://127.0.0.1:3000/profesionales?id=${id}`;
    }

    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(!Array.isArray(datos)){
            datos = Array(datos);
        }
        pintarDatosActores(datos)
        
        if(datos.length === 0 ){
            crearToast("Actor no encontrado","Busqueda erronea","red");
        }else{
            crearToast("Actor encontrado con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    
}

function insertarActor(){
    let actor = datosActor();
    
    if(actor === null){
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }else{
        let url =`http://127.0.0.1:3000/profesionales`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(actor),
            method : "POST" 
        }
        console.log(actor)
        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            console.log(datos)
            if(datos === -1 ){
                crearToast("Actor no guardado","Fallo","red");
            }else{
                crearToast("Actor guardado con exito","Guardado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarActor(){
    let estaRetirado = document.getElementById("estaRetirado").value;

    estaRetirado = (estaRetirado=="Si")?true:false;
    if(document.getElementById("indice").value){
        let actor = {
            "id" : document.getElementById("indice").value,
            "nombre" : (document.getElementById("nombre").value=="")?null:document.getElementById("nombre").value,
            "edad" :  (document.getElementById("edad").value=="")?null:document.getElementById("edad").value,
            "genero" :  (document.getElementById("genero").value=="")?null:document.getElementById("genero").value,
            "peso" :   (document.getElementById("peso").value=="")?null:document.getElementById("peso").value,
            "altura" :  (document.getElementById("altura").value=="")?null:document.getElementById("altura").value,
            "colorPelo" :  (document.getElementById("colorPelo").value=="")?null:document.getElementById("colorPelo").value,
            "colorOjo" :  (document.getElementById("colorOjo").value=="")?null:document.getElementById("colorOjo").value,
            "raza" :  (document.getElementById("raza").value=="")?null:document.getElementById("raza").value,
            "estaRetirado" :  estaRetirado,
            "nacionalidad" :  (document.getElementById("nacionalidad").value=="")?null:document.getElementById("nacionalidad").value,
            "numeroOscar" :  (document.getElementById("numeroOscar").value=="")?null:document.getElementById("numeroOscar").value,
            "profesion" :  (document.getElementById("profesion").value=="")?null:document.getElementById("profesion").value,
            "foto": (document.getElementById("foto").value=="")?null:document.getElementById("foto").value
        }
        
        let url =`http://127.0.0.1:3000/profesionales`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(actor),
            method : "PUT" 
        }
    
        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            
            if(datos ===  -1){
                crearToast("Actor no modificado","Fallo","red");
            }else{
                crearToast("Actor modificado con exito","Modificado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Indice de Actor no indicado","Fallo","red");
    }
    
}

function eliminarActor(){
    if(document.getElementById("indice").value != ""){
        let actor = {
            "id" : document.getElementById("indice").value
        }
        
        let url =`http://127.0.0.1:3000/profesionales`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(actor),
            method : "DELETE" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Actor no borrado","Fallo","red");
            }else{
                crearToast("Actor Borrado con exito","Borrado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }
    
}