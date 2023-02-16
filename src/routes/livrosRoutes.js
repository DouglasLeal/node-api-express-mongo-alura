import express from "express";

import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router.get("/livros", LivroController.listar)

export default router;