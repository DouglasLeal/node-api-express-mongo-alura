import express from "express";

import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listar)
    .get("/livros/busca", LivroController.listarPorEditora)
    .get("/livros/:id", LivroController.buscarPorId)    
    .post("/livros", LivroController.criar)
    .put("/livros/:id", LivroController.atualizar)
    .delete("/livros/:id", LivroController.excluir)

export default router;