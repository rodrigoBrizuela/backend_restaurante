const { Router } = require("express");
const {getPedidos, postPedidos, deletePedidos, putPedidos} = require("../controllers/pedidos")

const router = Router();

/*  pedidos/  */
router.get("/", getPedidos); 
router.post("/", postPedidos);
router.delete("/:idpedido", deletePedidos);
router.put("/:idpedido", putPedidos);

module.exports = router;