import express from "express";

import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "Erro conexão DB"));
db.once("open", () => {
    console.log("DB conectado com sucesso.")
});

const app = express();

app.use(express.json());

const livros = [
    {id: 1, titulo: "O Senhor dos Anéis"},
    {id: 2, titulo: "O Hobbit"}
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    let index = buscarLivro(req.params.id);

    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    
    res.status(201).send("Livro cadastrado com sucesso!!!");
});

app.put("/livros/:id", (req, res) => {
    let index = buscarLivro(req.params.id);

    livros[index].titulo = req.body.titulo;
    
    res.status(200).send("Livro atualizado com sucesso!!!");
});

app.delete("/livros/:id", (req, res) => {
    let index = buscarLivro(req.params.id);
    
    livros.splice(livros[index], 1);
    
    res.status(200).send("Livro excluído com sucesso!!!");
});

function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;