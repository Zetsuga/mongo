const express = require("express");
const app = express();
let cors = require("cors");

//REQUIRES DE  RUTAS
const actoresRoutes = require("./Routes/actores.routes");
const peliculasRoutes = require("./Routes/peliculas.routes");

//COnfiguración de la API
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set("port", process.env.PORT || 3000);


//RUTAS
app.use(actoresRoutes);
app.use(peliculasRoutes);


module.exports = app;