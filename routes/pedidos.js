const { Router } = require("express");
const {getPedidos, postItemPedidos, deleteItemPedidos, putItemPedidos} = require("../controllers/pedidos")

const router = Router();

/*  pedidos/  */
router.get("/", getPedidos); 
router.post("/", postItemPedidos);
router.delete("/:idpedido", deleteItemPedidos);
router.put("/:idpedido", putItemPedidos);

module.exports = router;