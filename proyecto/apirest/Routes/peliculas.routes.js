const {Router} = require("express");
const peliculasCtrl = require("../Controller/peliculas.controller")

const router = Router();

router.get("/peliculas",peliculasCtrl.getPeliculas);
router.get("/peliculas/actor",peliculasCtrl.getActores);
router.get("/peliculas/director",peliculasCtrl.getDirectores);
router.get("/peliculas/guionista",peliculasCtrl.getGuionistas);
router.get("/peliculas/productora",peliculasCtrl.getProductora);
router.post("/peliculas",peliculasCtrl.guardarPeliculas);
router.post("/peliculas/actor",peliculasCtrl.guardarActor);
router.post("/peliculas/director",peliculasCtrl.guardardirector);
router.post("/peliculas/guionista",peliculasCtrl.guardarGuionista);
router.put("/peliculas",peliculasCtrl.modificarPeliculas);
router.delete("/peliculas",peliculasCtrl.eliminarPeliculas);
router.delete("/peliculas/actor",peliculasCtrl.eliminarActor);
router.delete("/peliculas/director",peliculasCtrl.eliminarDirector);
router.delete("/peliculas/guionista",peliculasCtrl.eliminarGuionista);


module.exports = router;