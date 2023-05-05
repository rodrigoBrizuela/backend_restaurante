const Pedido = require("../models/pedidos");

const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        
        res.json({
            ok: true,
            mje: "Estos son los pedidos",
            pedidos: pedidos
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            mje: "Hubo un error",
            error: error
        });
    }
}

const postPedidos = async (req, res) => {
    try {
        const newPedido = new Pedido({
            ...req.body
        });

        const newPedidoDB = await newPedido.save();
        
        res.json({
            ok: true,
            mje: "se agrego con exito el pedido",
            menu: newPedidoDB
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            mje: "El pedido no se agrego",
            error: error
        });
    } 
}

const deletePedidos = async (req, res) => {
    try {
        const idPedidoDelete = req.params.idpedido;

        const pedidoDB = await Pedido.findById(idPedidoDelete);
        
        if(!pedidoDB){
            return res.status(404).json(
                {
                    ok: false,
                    mje: "No se encontro el menu"
                }
            );
        } 
            
        await Pedido.findByIdAndDelete(idPedidoDelete);
        
        res.json(
            {
                ok: true,
                mje: "Se elimino el pedido con exito"
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                ok: false,
                mje: "No se pudo eliminar el pedido",
                error: error
            }
        );
    }
}

const putPedidos = async (req, res) => {
    try {
        const idPedidoEdit = req.params.idpedido;
        const pedidoEditBody = req.body;

       const pedidoDB = await Pedido.findById(idMenuEdit);

       if(!pedidoDB) {
        return res.status(404).json(
            {
                ok: false,
                mje: "Pedido no encontrado"
            }
        );
       } 

       const newPedidoUpdate = await Pedido.findByIdAndUpdate(idPedidoEdit, pedidoEditBody,
        {
            new: true
        });

        res.json(
            {
                ok: true,
                mje: "Se actualizo el pedido con exito",
                pedidoUpdate : newPedidoUpdate
            }
        );

    } catch (error) {
        res.status(500).json(
            {
                ok: false,
                mje: "Hubo un error al editar el pedido"
            }
        );
    }
}


module.exports = {
    getPedidos,
    postPedidos,
    deletePedidos,
    putPedidos
}