import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use('/livros', livros);
    app.use('/autores', autores);
}

export default routes;