/* 
ACA VA LAS RUTAS, Y LA LOGICA EN CONTROLADORES.
EL .use del server, ya hace referencia a /menu, lo que sigue es lo que va aca
*/

const { Router } = require("express");
const {getMenus, postMenus, deleteMenus, putMenus} = require("../controllers/menus")

const router = Router();

/*  menus/  */
router.get("/", getMenus); 
router.post("/", postMenus);
router.delete("/:idmenu", deleteMenus);
router.put("/:idmenu", putMenus);

module.exports = router;