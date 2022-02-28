let contenedor = document.getElementById("contenedor__principal");
let html=``;

function inicio(){
    html = `<div class="container">
    <div class="row">
      <div class="col-xs-12 bannerImdb">
        <img class="img-fluid" src="./img/banner.jpg">
      </div>
    </div>
    <div class="row textoFilas">
        <h3 class="textoFila_texto">PELICULAS</h3>
    </div>
    <div class="row peliculaFila" id="filaPeliculas">

    </div>
    <div class="row" id="contenedor__peliculas">

    </div>
    <div class="row textoFilas">
      <h3 class="textoFila_texto">ACTORES</h3>
  </div>
    <div class="row actorFila" id="filaActores">

    </div>
    <div class="row" id="contenedor__actores">

    </div>
</div>`;
    contenedor.innerHTML = html;
    cargarDatos();
}

function peliculas(){

    html=`<div class="container ">
            <div class="row" id="peliculas"></div>
        </div>
        <div class="container" id="nueva">
            <div class="row justify-content-md-center">
                <div class="col-xs-2 col-sm-6">
                    <h2 class="tituloNuevaPelicula">Peliculas</h2>
                </div>
                
            </div>
            <div class="row justify-content-md-center">
                <div class="col-xs-2 col-sm-8">
                    <div class="row">
                        <form>
                            <div class="form-group">
                                <label for="indice">Indice</label>
                                <input type="text" class="form-control" id="indice"  placeholder="Indice de busqueda">
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-md-6">
                                <label for="titulo">Titulo</label>
                                <input type="text" class="form-control" id="titulo"  placeholder="título">
                            </div>
                            <div class="form-group col-xs-12 col-md-6">
                                <label for="anioPublicado">Año publicada</label>
                                <input type="date" class="form-control" id="anioLanzamiento"  placeholder="Año publicada">
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="nacionalidad">Nacionalidad</label>
                                <input type="text" class="form-control" id="nacionalidad"  placeholder="Nacionalidad">
                            </div>
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="idioma">Idioma</label>
                                <input type="text" class="form-control" id="idioma"  placeholder="idioma">
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="plataforma">Plataforma</label>
                                <input type="text" class="form-control" id="plataforma"  placeholder="Plataforma">
                            </div>
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="esMCU">¿Es MCU?</label>
                                <select class="form-control" id="esMCU">
                                    <option>Si</option>
                                    <option selected>No</option>
                                </select>
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="personajePrincipal">Personaje Principal</label>
                                <input type="text" class="form-control" id="personajePrincipal"  placeholder="Personaje Principal">
                            </div>
                            <div class="form-groupcol-xs-12 col-sm-6">
                                <label for="productora">Productor</label>
                                <input type="text" class="form-control" id="productora"  placeholder="Productora">
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="distribuidora">Distribuidor</label>
                                <input type="text" class="form-control" id="distribuidora"  placeholder="distribuidora">
                            </div>
                            <div class="form-groupcol-xs-12 col-sm-6">
                                <label for="genero">Género</label>
                                <input type="text" class="form-control" id="genero"  placeholder="Género">
                            </div>
                            </div>
                            <div class="form-group">
                                <label for="portada">Portada</label>
                                <input type="text" class="form-control" id="portada"  placeholder="Ruta de la portada">
                            </div> 
                            <div class="botonera">
                            <button type="button" class="btn btn-primary" onclick="buscarPelicula()">Buscar</button>
                            <button type="button" class="btn btn-success" onclick="insertarPelicula()">Añadir</button>.
                            <button type="button" class="btn btn-warning" onclick="modificarPelicula()">Modificar</button>
                            <button type="button" class="btn btn-danger" onclick="eliminarPelicula()">Eliminar</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>`

    contenedor.innerHTML = html;
}

function actores(){
 html=`<div class="container ">
            <div class="row" id="peliculas"></div>
            </div>
            <div class="container" id="nueva">
            <div class="row justify-content-md-center">
                <div class="col-xs-2 col-sm-6">
                    <h2 class="tituloNuevaPelicula">Actores</h2>
                </div>
                
            </div>
            <div class="row justify-content-md-center">
                <div class="col-xs-2 col-sm-8">
                    <div class="row">
                        <form>
                            <div class="form-group">
                                <label for="indice">Indice</label>
                                <input type="text" class="form-control" id="indice"  placeholder="Indice de busqueda">
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-md-6">
                                <label for="nombreº">Nombre</label>
                                <input type="text" class="form-control" id="nombre"  placeholder="Nombre">
                            </div>
                            <div class="form-group col-xs-12 col-md-6">
                                <label for="edad">Edad</label>
                                <input type="number" class="form-control" id="edad"  placeholder="Edad">
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="genero">Genero</label>
                                <input type="text" class="form-control" id="genero"  placeholder="Genero">
                            </div>
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="peso">Peso</label>
                                <input type="number" class="form-control" id="peso"  placeholder="Peso">
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="altura">Altura</label>
                                <input type="number" class="form-control" id="altura"  placeholder="Altura">
                            </div>
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="colorPelo">Color de pelo</label>
                                <input type="text" class="form-control" id="colorPelo"  placeholder="Color de pelo">
                            </div>
                            </div>
                            <div class="row">
                            <div class="form-group col-xs-12 col-sm-6">
                                <label for="colorOjo">Color de ojo</label>
                                <input type="text" class="form-control" id="colorOjo"  placeholder="Color de ojos">
                            </div>
                            <div class="form-groupcol-xs-12 col-sm-6">
                                <label for="raza">Raza</label>
                                <input type="text" class="form-control" id="raza"  placeholder="Raza">
                            </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12 col-sm-6">
                                    <label for="estaRetirado">¿Está retirado?</label>
                                    <select class="form-control" id="estaRetirado">
                                        <option>Si</option>
                                        <option selected>No</option>
                                    </select>
                                </div>
                                <div class="form-groupcol-xs-12 col-sm-6">
                                    <label for="nacionalidad">Nacionalidad</label>
                                    <input type="text" class="form-control" id="nacionalidad"  placeholder="Nacionalidad">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12 col-sm-6">
                                    <label for="numeroOscar">Número de Oscars</label>
                                    <input type="number" class="form-control" id="numeroOscar"  placeholder="Número de Oscars">
                                </div>
                                <div class="form-groupcol-xs-12 col-sm-6">
                                    <label for="profesion">Profesión</label>
                                    <input type="text" class="form-control" id="profesion"  placeholder="Profesión">
                                </div>
                                </div>
                            <div class="form-group">
                                <label for="foto">Foto</label>
                                <input type="text" class="form-control" id="foto"  placeholder="Ruta de la foto">
                            </div> 
                            <div class="botonera">
                                <button type="button" class="btn btn-primary" onclick="buscarActor()">Buscar</button>
                                <button type="button" class="btn btn-success" onclick="insertarActor()">Añadir</button>.
                                <button type="button" class="btn btn-warning" onclick="modificarActor()">Modificar</button>
                                <button type="button" class="btn btn-danger" onclick="eliminarActor()">Eliminar</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>`;
    contenedor.innerHTML = html;
}

function directores(){
    html =`<div class="container ">
                <div class="row" id="peliculas"></div>
            </div>
            <div class="container" id="nueva">
                <div class="row justify-content-md-center">
                    <div class="col-xs-2 col-sm-6">
                        <h2 class="tituloNuevaPelicula">Directores</h2>
                    </div>
                    
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-xs-12 col-md-4 offset-2">
                        <div class="row">
                            <form>
                                <div class="form-group col-xs-12">
                                    <label for="indice">Pelicula</label>
                                    <select class="form-control" id="indice">
                                    </select>                        
                                </div>
                                <div class="form-group col-xs-12">
                                    <label for="nombreº">Nombre</label>
                                    <input type="text" class="form-control" id="nombre"  placeholder="Nombre">
                                </div>
                                <div class="botonera">
                                    <button type="button" class="btn btn-primary" onclick="buscarDirector()">Buscar</button>
                                    <button type="button" class="btn btn-success" onclick="insertarDirector()">Añadir</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6" id="busqueda"></div>
                </div>
            </div>`;
    contenedor.innerHTML = html;
    cargarDirectores();
}

function guionistas(){
    html = `<div class="container" id="nueva">
                <div class="row justify-content-md-center">
                    <div class="col-xs-2 col-sm-6">
                        <h2 class="tituloNuevaPelicula">Guionista</h2>
                    </div>
                    
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-xs-12 col-md-4 offset-2">
                        <div class="row">
                            <form>
                                <div class="form-group col-xs-12">
                                    <label for="indice">Pelicula</label>
                                    <select class="form-control" id="indice">
                                    </select>                        
                                </div>
                                <div class="form-group col-xs-12">
                                    <label for="nombreº">Nombre</label>
                                    <input type="text" class="form-control" id="nombre"  placeholder="Nombre">
                                </div>
                                <div class="botonera">
                                    <button type="button" class="btn btn-primary" onclick="buscarGuionista()">Buscar</button>
                                    <button type="button" class="btn btn-success" onclick="insertarGuionista()">Añadir</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6" id="busqueda"></div>
                </div>
            </div>`;
    contenedor.innerHTML = html;
    cargarDirectores();
}

function actoresPelicula(){
    html = `<div class="container ">
                <div class="row" id="peliculas"></div>
            </div>
            <div class="container" id="nueva">
                <div class="row justify-content-md-center">
                    <div class="col-xs-2 col-sm-6">
                        <h2 class="tituloNuevaPelicula">Actores</h2>
                    </div>
                    
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-xs-12 col-md-4 offset-2">
                        <div class="row">
                            <form>
                                <div class="form-group col-xs-12">
                                    <label for="indice">Pelicula</label>
                                    <select class="form-control" id="indice">
                                    </select>                        
                                </div>
                                <div class="form-group col-xs-12">
                                    <label for="nombreº">Nombre</label>
                                    <input type="text" class="form-control" id="nombre"  placeholder="Nombre">
                                </div>
                                <div class="botonera">
                                    <button type="button" class="btn btn-primary" onclick="buscarActoresPeliculas()">Buscar</button>
                                    <button type="button" class="btn btn-success" onclick="insertarActoresPeliculas()">Añadir</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6" id="busqueda"></div>
                </div>
            </div>`;
    contenedor.innerHTML = html;
    cargarDirectores();
}

function productora(){
    html=`<div class="container ">
            <div class="row" id="peliculas"></div>
        </div>
        <div class="container" id="nueva">
            <div class="row justify-content-md-center">
                <div class="col-xs-2 col-sm-6">
                    <h2 class="tituloNuevaPelicula">Productora</h2>
                </div>
                
            </div>
            <div class="row justify-content-md-center">
                <div class="col-xs-12 col-md-4 offset-2">
                    <div class="row">
                        <form>
                            <div class="form-group col-xs-12">
                                <label for="indice">Peliculas</label>
                                <select class="form-control" id="indice">
                                </select>                        
                            </div>
                        
                            <div class="botonera">
                                <button type="button" class="btn btn-primary" onclick="buscarProductora()">Buscar</button>
                                </div>
                        </form>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6" id="busqueda"></div>
            </div>
        </div>`;
    contenedor.innerHTML = html;
    cargarDirectores();
}

