const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuarioHandler");

router.get("/", async (req, res) => {
    const usuarios = await usuarioHandler.getUsuarios();
    res.json(usuarios);
});

router.post("/", async (req, res) => {
    res.json(await usuarioHandler.cadastrarUsuario(req.body));
});

router.delete("/", async (req, res) =>{
    res.json(await usuarioHandler.apagarDados());
});

module.exports = router;