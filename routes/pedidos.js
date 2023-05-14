const { Router } = require("express");
const {getPedidos, getOnePedidos, postItemPedidos, deleteItemPedidos, putItemPedidos} = require("../controllers/pedidos")

const router = Router();

/*  pedidos/  */
router.get("/", getPedidos); 
router.get("/idpedido", getOnePedidos); 
router.post("/", postItemPedidos);
router.delete("/:idpedido", deleteItemPedidos);
router.put("/:idpedido/:idmenu", putItemPedidos);

module.exports = router;