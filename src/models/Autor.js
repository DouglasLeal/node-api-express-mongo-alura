import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        nacionalidade: {type: String},
    },
    {
        versionKey: false
    }
);

const Autor = mongoose.model("autores", autorSchema);

export default Autor;