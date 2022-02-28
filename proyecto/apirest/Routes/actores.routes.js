const {Router} = require("express");
const actoresCtrl = require("../Controller/actores.controller")

const router = Router();

router.get("/profesionales",actoresCtrl.getActores);
router.post("/profesionales",actoresCtrl.guardarActores);
router.put("/profesionales",actoresCtrl.modificarActores);
router.delete("/profesionales",actoresCtrl.eliminarActores);

module.exports = router; 