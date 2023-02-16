import Livro from "../models/Livro.js";

class LivroController{

    static listar(req, res){
        Livro.find((err, livros) => {
            if(err) return res.status(500).send("Erro ao processar a requisição.");
    
            return res.status(200).json(livros);
        });
    }
}

export default LivroController;