import express from "express";

import AutorController from "../controllers/AutorController.js";

const router = express.Router();

router
    .get("/autores", AutorController.listar)
    .get("/autores/:id", AutorController.buscarPorId)
    .post("/autores", AutorController.criar)
    .put("/autores/:id", AutorController.atualizar)
    .delete("/autores/:id", AutorController.excluir)

export default router;