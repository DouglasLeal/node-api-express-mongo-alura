import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number},
    }
);

const Livro = mongoose.model("livros", livroSchema);

export default Livro;