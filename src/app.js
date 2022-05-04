import express from 'express';
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
    console.log('conexao com o banco feita com sucesso')
})

const app = express();

// Read request body as json
app.use(express.json())

routes(app);

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index])
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id);
    livros.splice(index,1);
    res.json(`Livro ${id} removido com sucesso`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app