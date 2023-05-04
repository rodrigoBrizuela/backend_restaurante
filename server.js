/*
1) Instalar: 
            npm i express
            npm i cors path dotenv
            npm install -g nodemon
            npm i uid
            npm i mongoose
2) Para levantar el server: node server.js, con nodemon: nodemon server.js
3) 
req -> para leer informacion 
res -> para enviar informacion
4) JSON formater para mejorar la vista de los objetos en google (extension)
5) req.params -> para leer informacion que viene por parametro en la url
6) Instalar postman
*/

const express = require ("express");
const path = require ("path");
const cors = require ("cors");
require("dotenv").config();
const { log } = require("console");
const { dbConnection } = require("./bbddConection");

const PORT = 3012;

const server = express();
server.use(cors());//Para evitar problemas de seguridad
server.use(express.json()); //Para recibir y enviar JSON
dbConnection();

server.use("/menus", require("./routes/menus"));

server.listen(PORT, () => {
    console.log("Server iniciado en: ", PORT);
});