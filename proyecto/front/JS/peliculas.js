class Peliculas{

    constructor(titulo,anioLanzamiento,actores,nacionalidad,director,guionista,lengua,
        plataforma,esMCU,personajePrincipal,productora,distribuidora,genero,portada){

        this.titulo=titulo;
        this.anioLanzamiento=anioLanzamiento;
        this.actores=actores;
        this.nacionalidad=nacionalidad;
        this.director=director;
        this.guionista=guionista;
        this.lengua=lengua;
        this.plataforma=plataforma;
        this.esMCU=esMCU;
        this.personajePrincipal=personajePrincipal;
        this.productora=productora;
        this.distribuidora=distribuidora;
        this.genero=genero;
        this.portada = portada;
    }
}

function pintarDatos(pelicula){
    let html="";

    pelicula.forEach((datos)=>{
        let actoresArray=[];
        let directoresArray=[];
        let guionistaArray=[];

        datos.actores.forEach((elemento)=>{
            actoresArray.push(elemento);
        });
        datos.director.forEach((elemento)=>{
            directoresArray.push(elemento);
        });
        datos.guionista.forEach((elemento)=>{
            guionistaArray.push(elemento);
        });

        html += `<div class="col-xs-12 col-sm-6 col-md-4">`
            + `<div class="card">`
            + `<img class="card-img-top img-fluid imagen__pelicula" src="${datos.foto}" alt="${datos.titulo}">`
            + `<div class="card-body">`
            +  `<h5 class="card-title">${datos.titulo}</h5>`
            +  `<p class="card-text">`
            +   `Año publicado: ${datos.anioLanzamiento}<br>`
            +   `Actores: ${actoresArray}<br>`
            +   `Nacionalidad: ${datos.nacionalidad}<br>`
            +   `Director: ${directoresArray}<br>`
            +   `Guionista: ${guionistaArray}<br>` 
            +   `Idioma: ${datos.lengua}<br>` 
            +   `Plataforma: ${datos.plataforma}<br>` 
            +   `¿Es MCU?: ${datos.esMCU}<br>` 
            +   `Personaje principal: ${datos.personajePrincipal}<br>` 
            +   `Productor: ${datos.productora}<br>`
            +   `Distribuidor: ${datos.distribuidor}<br>`
            +   `Genero: ${datos.genero}<br>`
            + `</p>`
            + `</div>`
            + `</div>`
            +`</div>`;
    })
    document.getElementById("peliculas").innerHTML = html;
}

function datosPelicula(){
    let element;
    let correcto = true;

    if(document.getElementById("titulo").value == ""){
        element = document.getElementById("titulo");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("anioLanzamiento").value == ""){
        element = document.getElementById("anioLanzamiento");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("nacionalidad").value == ""){
        element = document.getElementById("nacionalidad");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("idioma").value == ""){
        element = document.getElementById("idioma");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("plataforma").value == ""){
        element = document.getElementById("plataforma");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("personajePrincipal").value == ""){
        element = document.getElementById("personajePrincipal");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("productora").value == ""){
        element = document.getElementById("productora");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("distribuidora").value == ""){
        element = document.getElementById("distribuidora");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("genero").value == ""){
        element = document.getElementById("genero");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("portada").value == ""){
        element = document.getElementById("portada");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    
    if(correcto){
        let titulo =  document.getElementById("titulo").value; 
        let nacionalidad =  document.getElementById("nacionalidad").value; 
        let idioma =  document.getElementById("idioma").value; 
        let plataforma =  document.getElementById("plataforma").value; 
        let esMCU =  document.getElementById("esMCU").value;
        esMCU=(esMCU=="Si")?true:false; 
        let personajePrincipal =  document.getElementById("personajePrincipal").value; 
        let productora =  document.getElementById("productora").value; 
        let distribuidora =  document.getElementById("distribuidora").value; 
        let genero =  document.getElementById("genero").value; 
        let portada =  document.getElementById("portada").value;
        let date =  new Date(document.getElementById("anioLanzamiento").value); 
        let fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
 
        return new Peliculas(titulo,fecha,[],nacionalidad,[],[],idioma,plataforma,esMCU
            ,personajePrincipal,productora,distribuidora,genero,portada);
    }else{
        return null;
    } 
}

function buscarPelicula(){
    let id = document.getElementById("indice").value;

    if(id===""){
        url =`http://127.0.0.1:3000/peliculas`;
    }else{
        url =`http://127.0.0.1:3000/peliculas?id=${id}`;
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
        console.log(datos)
        if(!Array.isArray(datos)){
            datos = Array(datos);
        }
        pintarDatos(datos)
        
        if(datos.length === 0 ){
            crearToast("Pelicula no encontrada","Busqueda erronea","red");
        }else{
            crearToast("Pelicula encontrada con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    
}

function insertarPelicula(){
    let pelicula = datosPelicula();
    
    if(pelicula === null){
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }else{
        let url =`http://127.0.0.1:3000/peliculas`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(pelicula),
            method : "POST" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            console.log(datos)
            if(datos === -1 ){
                crearToast("Película no guardada","Fallo","red");
            }else{
                crearToast("Película guardada con exito","Guardado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarPelicula(){
    let fecha;
    let esMCU = document.getElementById("esMCU").value;

    if(document.getElementById("anioLanzamiento").value != ""){
        let date = new Date(document.getElementById("anioLanzamiento").value); 
        fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }else{
        fecha =null;
    }

    esMCU = (esMCU=="Si")?true:false;
    
    let pelicula = {
        "id" : document.getElementById("indice").value,
        "titulo" :  (document.getElementById("titulo").value=="")?null:document.getElementById("titulo").value,
        "nacionalidad" :  (document.getElementById("nacionalidad").value=="")?null:document.getElementById("nacionalidad").value,
        "anioIngreso" :  fecha,
        "lengua" :  (document.getElementById("idioma").value=="")?null:document.getElementById("idioma").value,
        "plataforma" :  (document.getElementById("plataforma").value=="")?null:document.getElementById("plataforma").value,
        "esMCU" :  esMCU,
        "personajePrincipal" :  (document.getElementById("personajePrincipal").value=="")?null:document.getElementById("personajePrincipal").value,
        "productora" :  (document.getElementById("productora").value=="")?null:document.getElementById("productora").value,
        "distribuidora" :  (document.getElementById("distribuidora").value=="")?null:document.getElementById("distribuidora").value,
        "genero" :  (document.getElementById("genero").value=="")?null:document.getElementById("genero").value,
        "portada" :  (document.getElementById("portada").value=="")?null:document.getElementById("portada").value
    }
    
    let url =`http://127.0.0.1:3000/peliculas`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(pelicula),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        if(datos ===  -1){
            crearToast("Pelicula no modificada","Fallo","red");
        }else{
            crearToast("Pelicula modificada con exito","Modificado","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function eliminarPelicula(){
    if(document.getElementById("indice").value != ""){
        let pelicula = {
            "id" : document.getElementById("indice").value
        }
        
        let url =`http://127.0.0.1:3000/peliculas`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(pelicula),
            method : "DELETE" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Pelicula no borrada","Fallo","red");
            }else{
                crearToast("Pelicula Borrada con exito","Borrado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }
    
}

function cargarDirectores(){
    
    url =`http://127.0.0.1:3000/peliculas`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let indice = document.getElementById("indice");
        let texto = "";
        for( atributo in datos){
            texto +=`<option value="${datos[atributo]._id}"> `+
            `${datos[atributo].titulo}</option>`;
        }
        
        indice.innerHTML = texto;
    })
    .catch((error)=>{
        console.log(error);
    })
}

function buscarDirector(){
    
    let indice = document.getElementById("indice").value;
    url =`http://127.0.0.1:3000/peliculas/director?id=${indice}`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let tabla=`<table class="table tablaCodenotch table-striped table-hover">
                <thead>
                    <td scope="col">Nombre</td>
                    <td scope="col">Acción</td>
                </thead>
                <tbody>`;
        for( atributo in datos){
            tabla+= `<tr>
            <td class="texto_fila">${datos[atributo]}</td>
            <td class="texto_fila"><button type="button" class="btn btn-danger"`+
            ` onclick="eliminarDirector('${datos[atributo]}')">Eliminar</button>
            </td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        document.getElementById("busqueda").innerHTML = tabla;
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarDirector(){
    if(document.getElementById("nombre")!=""){
        let director = {
            "id" : document.getElementById("indice").value,
            "director" : document.getElementById("nombre").value
        }

        url =`http://127.0.0.1:3000/peliculas/director`;


        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(director),
            method : "POST" 
        }
        
        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Director no guardado","Fallo","red");
            }else{
                crearToast("Director guardado con exito","Borrado","green")
            }
            buscarDirector();
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");

    }
}

function eliminarDirector(nombre){
    let director = {
        "id" : document.getElementById("indice").value,
        "director" : nombre
    }

    url =`http://127.0.0.1:3000/peliculas/director`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(director),
        method : "DELETE" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(datos === -1 ){
            crearToast("Director no eliminado","Fallo","red");
        }else{
            crearToast("Director eliminado","Borrado","green")
        }
        buscarDirector()
    })
    .catch((error)=>{
        console.log(error);
    })
}


function buscarGuionista(){
    
    let indice = document.getElementById("indice").value;
    url =`http://127.0.0.1:3000/peliculas/guionista?id=${indice}`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let tabla=`<table class="table tablaCodenotch table-striped table-hover">
                <thead>
                    <td scope="col">Nombre</td>
                    <td scope="col">Acción</td>
                </thead>
                <tbody>`;
        for( atributo in datos){
            tabla+= `<tr>
            <td class="texto_fila">${datos[atributo]}</td>
            <td class="texto_fila"><button type="button" class="btn btn-danger"`+
            ` onclick="eliminarGuionista('${datos[atributo]}')">Eliminar</button>
            </td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        document.getElementById("busqueda").innerHTML = tabla;
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarGuionista(){
    if(document.getElementById("nombre")!=""){
        let guionista = {
            "id" : document.getElementById("indice").value,
            "guionista" : document.getElementById("nombre").value
        }

        url =`http://127.0.0.1:3000/peliculas/guionista`;


        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(guionista),
            method : "POST" 
        }
        
        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Guionista no guardado","Fallo","red");
            }else{
                crearToast("Guionista guardado con exito","Borrado","green")
            }
            buscarGuionista();
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");

    }
}

function eliminarGuionista(nombre){
    let guionista = {
        "id" : document.getElementById("indice").value,
        "guionista" : nombre
    }

    url =`http://127.0.0.1:3000/peliculas/guionista`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(guionista),
        method : "DELETE" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(datos === -1 ){
            crearToast("Guionista no eliminado","Fallo","red");
        }else{
            crearToast("Guionista eliminado","Borrado","green")
        }
        buscarGuionista()
    })
    .catch((error)=>{
        console.log(error);
    })
}

function buscarActoresPeliculas(){
    
    let indice = document.getElementById("indice").value;
    url =`http://127.0.0.1:3000/peliculas/actor?id=${indice}`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let tabla=`<table class="table tablaCodenotch table-striped table-hover">
                <thead>
                    <td scope="col">Nombre</td>
                    <td scope="col">Acción</td>
                </thead>
                <tbody>`;
        for( atributo in datos){
            tabla+= `<tr>
            <td class="texto_fila">${datos[atributo]}</td>
            <td class="texto_fila"><button type="button" class="btn btn-danger"`+
            ` onclick="eliminarGuionista('${datos[atributo]}')">Eliminar</button>
            </td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        document.getElementById("busqueda").innerHTML = tabla;
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarActoresPeliculas(){
    if(document.getElementById("nombre")!=""){
        let actores = {
            "id" : document.getElementById("indice").value,
            "actores" : document.getElementById("nombre").value
        }

        url =`http://127.0.0.1:3000/peliculas/actor`;


        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(actores),
            method : "POST" 
        }
        
        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Actor no guardado","Fallo","red");
            }else{
                crearToast("Actor guardado con exito","Borrado","green")
            }
            buscarActoresPeliculas();
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");

    }
}

function eliminarGuionista(nombre){
    let actores = {
        "id" : document.getElementById("indice").value,
        "actores" : nombre
    }

    url =`http://127.0.0.1:3000/peliculas/actor`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(actores),
        method : "DELETE" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(datos === -1 ){
            crearToast("Actor no eliminado","Fallo","red");
        }else{
            crearToast("Actor eliminado","Borrado","green")
        }
        buscarActoresPeliculas()
    })
    .catch((error)=>{
        console.log(error);
    })
}

function buscarProductora(){
    let indice = document.getElementById("indice").value;
    url =`http://127.0.0.1:3000/peliculas/productora?id=${indice}`;


    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        let tabla=`<table class="table tablaCodenotch table-striped table-hover">
                <thead>
                    <td scope="col">Nombre</td>
                </thead>
                <tbody>
                    <tr>
                        <td class="texto_fila">${datos.productora}</td>
                        </td>
                    </tr>
                </tbody>
                </table>`;

        document.getElementById("busqueda").innerHTML = tabla;
    })
    .catch((error)=>{
        console.log(error);
    })
}