function crearToast(text,title,color){
    let texto = text;
    let titulo = title;
    let toast = document.getElementById("toast");
    //toast.innerHTML="";

    let alerta = `<div class="toast-header">
                <h4 class="mr-auto toast__titulo__rojo">
                <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="${color}"></rect></svg>
                ${titulo}</h4>
                </div>
                <div class="toast-body toast__texto">
                    ${texto}
                </div>`;
    toast.innerHTML = alerta;
    var toastOn = new bootstrap.Toast(toast);

    toastOn.show()
}

function cargarDatos(){

    url =`http://127.0.0.1:3000/peliculas`;
        
    url2 = `http://127.0.0.1:3000/profesionales`;
    
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((datas)=>{
        return datas.json();
    })
    .then((datos)=>{
        //console.log(element)
        let filaPeliculas = document.getElementById("filaPeliculas");
        let htmlPelicula =`<div class="carousel slide" id="carousel" data-ride="carousel2">
        <div class="carousel-inner">`;
        let contador  = 1;
        let activo =true;
        datos.forEach(elemento => {
            // htmlPelicula += `<div class="col-xs-4 col-md-3 peliculaImagen">
            //             <img class="img-fluid" src="${elemento.portada}" onclick="peliculaInicio('${elemento._id}')">
            //         </div>`;
            if(contador==1 && activo){
                htmlPelicula += `<div class="carousel-item active">
                <div class="row">`;
                activo  = false;
            }else if (contador==1) {
                htmlPelicula += `<div class="carousel-item">
            <div class="row">`;
            }
            htmlPelicula += `<div class="col peliculaImagen">
                                <img class="img-fluid" src="${elemento.portada}" onclick="peliculaInicio('${elemento._id}')">
                            </div>`;
            if(contador==5){
                htmlPelicula +=`</div>
                </div>`;
                contador =1;
            }else{
                contador ++;
            }
        });
        
        htmlPelicula += `</div>
                </div>`;
        filaPeliculas.innerHTML=htmlPelicula;
        return fetch(url2,param)
    })
    .then((data)=>{
        return data.json();
    })
    .then((dato)=>{
        let filaActores = document.getElementById("filaActores");
        let htmlActores =`<div class="carousel2 slide" id="carousel" data-ride="carousel2">
        <div class="carousel-inner">`;
        let contador  = 1;
        let activo =true;
        dato.forEach(element => {
            // htmlPelicula += `<div class="col-xs-4 col-md-3 peliculaImagen">
            //             <img class="img-fluid" src="${elemento.portada}" onclick="peliculaInicio('${elemento._id}')">
            //         </div>`;
            if(contador==1 && activo){
                htmlActores += `<div class="carousel-item active">
                <div class="row">`;
                activo  = false;
            }else if (contador==1) {
                htmlActores += `<div class="carousel-item">
            <div class="row">`;
            }
            htmlActores += `<div class="col actorImagen">
                                <img class="img-fluid" src="${element.foto}" onclick="actoresInicio('${element._id}')">
                            </div>`;
            if(contador==5){
                htmlActores +=`</div>
                </div>`;
                contador =1;
            }else{
                contador ++;
            }
        });
        
        htmlActores += `</div>
                </div>`;
    filaActores.innerHTML = htmlActores;
    })
    .catch((error)=>{
        console.log(error);
    })
}

function peliculaInicio(id){
    url =`http://127.0.0.1:3000/peliculas?id=${id}`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let contenedorPeliculas = document.getElementById("contenedor__peliculas");
        let pelicula =`<div class="col-xs-12 col-md-3 offset-4 justify-content-right card-text">
                        <img class="img-fluid" src="${datos.portada}">
                    </div>
                    <div class="col-xs-12 col-md-5">
                    <h5 class="card-title">${datos.titulo}</h5>
                    <p class="card-text">
                    Año publicado: ${datos.anioLanzamiento}<br>
                    Actores: ${datos.actores}<br>
                    Nacionalidad: ${datos.nacionalidad}<br>
                    Director: ${datos.directores}<br>
                    Guionista: ${datos.guionistas}<br>
                    Idioma: ${datos.lengua}<br>
                    Plataforma: ${datos.plataforma}<br> 
                    ¿Es MCU?: ${datos.esMCU}<br>
                    Personaje principal: ${datos.personajePrincipal}<br>
                    Productor: ${datos.productora}<br>
                    Distribuidor: ${datos.distribuidor}<br>
                    Genero: ${datos.genero}<br>
                    </p>
                    </div>`;
    

        contenedorPeliculas.innerHTML=pelicula;
        contenedorPeliculas.id="contenedor__peliculas--modified";
    })
    .catch((error)=>{
        console.log(error);
    })
}

function  actoresInicio(id){
    url =`http://127.0.0.1:3000/profesionales?id=${id}`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }
    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((dato)=>{
        let contenedorActores = document.getElementById("contenedor__actores");
        let actor =`<div class="col-xs-12 col-md-3 offset-4 justify-content-right">
                        <img class="img-fluid" src="${dato.foto}">
                    </div>
                    <div class="col-xs-12 col-md-5 card-text">
            
                    Nombre : ${dato.nombre}<br>
                    Edad: ${dato.edad}<br>
                    Genero: ${dato.genero}<br>
                    Peso: ${dato.peso}<br>
                    Altura: ${dato.altura}<br>
                    Color de pelo: ${dato.colorPelo}<br> 
                    color de ojos: ${dato.colorOjo}<br> 
                    Raza: ${dato.raza}<br> 
                    ¿Está retirado?: ${dato.estaRetirado}<br> 
                    Nacionalidadl: ${dato.nacionalidad}<br>
                    numero de Oscars: ${dato.numeroOscar}<br>
                    Profesión: ${dato.profesion}<br>
                    </p>
                    </div>`;
    

        contenedorActores.innerHTML=actor;
        contenedorActores.id="contenedor__actores--modified";
    })
    .catch((error)=>{
        console.log(error);
    })
}