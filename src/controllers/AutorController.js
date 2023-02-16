import Autor from "../models/Autor.js";

class AutorController{

    static listar(req, res){
        Autor.find((err, autores) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});
    
            return res.status(200).json(autores);
        });
    }

    static buscarPorId(req, res){
        let {id} = req.params;

        Autor.findById(id, (err, autor) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});
    
            return res.status(200).json(autor);
        });
    }

    static criar(req, res){
        let novoAutor = new Autor(req.body);

        novoAutor.save((err) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});

            return res.status(201).json(novoAutor.toJSON());
        });
    }

    static atualizar(req, res){
        let {id} = req.params;

        Autor.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});

            return res.status(204).json();
        });
    }

    static excluir(req, res){
        let {id} = req.params;

        Autor.findByIdAndDelete(id, (err) => {
            if(err) return res.status(500).json({erro: "Erro ao processar a requisição."});

            return res.status(204).json();
        });
    }
}

export default AutorController;