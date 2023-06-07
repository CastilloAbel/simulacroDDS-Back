const express = require('express');

const router = express.Router()
const db = require('../base-orm/sequelize-init')
const { Op, ValidationError } = require("sequelize");

router.get("/api/clientes", async (req, res)=>{
    where = {};
    if (req.query.ApellidoYNombre != undefined && req.query.nombre !== "") {
        where.ApellidoYNombre = {
          [Op.like]: "%" + req.query.ApellidoYNombre + "%",
        };
    }
    let AyN = req.query.ApellidoYNombre;
let clientes = await db.clientes.findAll({ attributes: [
    "IdCliente",
    "ApellidoYNombre",
    "DNI"
],
where
})
res.json(clientes);

})

module.exports = router