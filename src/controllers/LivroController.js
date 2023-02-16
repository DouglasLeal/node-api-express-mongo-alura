import Livro from "../models/Livro.js";

class LivroController{

    static listar(req, res){
        Livro.find((err, livros) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});
    
            return res.status(200).json(livros);
        });
    }

    static buscarPorId(req, res){
        let {id} = req.params;

        Livro.findById(id, (err, livro) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});
    
            return res.status(200).json(livro);
        });
    }

    static criar(req, res){
        let novoLivro = new Livro(req.body);

        novoLivro.save((err) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});

            return res.status(201).json(novoLivro.toJSON());
        });
    }

    static atualizar(req, res){
        let {id} = req.params;

        Livro.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});

            return res.status(204);
        });
    }

    static excluir(req, res){
        let {id} = req.params;

        Livro.findByIdAndDelete(id, (err) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});

            return res.status(204).json();
        });
    }
}

export default LivroController;