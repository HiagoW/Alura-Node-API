import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/", AutorController.listarAutores)
    .post("/", AutorController.cadastrarAutor)
    .put("/:id", AutorController.atualizarAutor)
    .get("/:id", AutorController.listarAutorPorId)
    .delete("/:id", AutorController.excluirAutor)
    
export default router;