const app = require("./app");


//ENLACE DE LA BASE DE DATOS
require("./database");


app.listen(app.get("port"), ()=>(console.log("Servidor funcionando en el puerto ",app.get("port"))));