import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/", LivroController.listarLivros)
    .get("/busca", LivroController.listarLivroPorEditora)
    .post("/", LivroController.cadastrarLivro)
    .put("/:id", LivroController.atualizarLivro)
    .get("/:id", LivroController.listarLivroPorId)
    .delete("/:id", LivroController.excluirLivro)
export default router;