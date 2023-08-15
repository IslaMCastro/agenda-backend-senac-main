const { Tarefa: TarefaModel } = require("../models/Tarefa");
const TarefaController = {
    create: async (req, res) => {
        try {
          const tarefa = {
            assunto: req.body.assunto,
            data: req.body.data,
            descricao: req.body.descricao,
            contato: req.body.contato,
            situacao: req.body.situacao,
          };
          const response = await TarefaModel.create(tarefa);    
          res.status(201).json({ response, msg: "Criado com sucesso!" });
        } catch (error) {
          //em caso de erro retorne
          console.log(error);
          res.status(400).json({ msg: "Não foi possivel salvar" });
        }
      },
      //Ler - Read
  getAll: async (req, res) => {
    try {
      const tarefa = TarefaModel.find();
      // response.status(200).json({data: tarefa})
      response.json(tarefa);
    } catch (error) {
      //em caso de erro retorne
      console.log(error);
      res.status(400).json({ msg: "Não foi possivel executar pesquisa" });
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const Tarefa = await TarefaModel.findById(id);
      if (!Tarefa) {
        res.status(404).json({ msg: "Tarefa não encontrada!" });
        return;
      }
      res.json(Tarefa);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: "Não foi possivel executar pesquisa" });
    }
  },
  //Atualizar - Update
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const Tarefa = {
        name: req.body.nome,
      };
      const TarefaAtualizada = await TarefaModel.findByIdAndUpdate(
        id,
        Tarefa
      );
      if (!TarefaAtualizada) {
        res.status(404).json({ msg: "Tarefa não encontrada!" });
        return;
      }
      res
        .status(200)
        .json({ TarefaAtualizada, msg: "Tarefa atualizada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  //Remover - Delete
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const Tarefa = await TarefaModel.findById(id);
      if (!Tarefa) {
        res.status(404).json({ msg: "Tarefa não encontrada!" });
        return;
      }
      const TarefaDeletada= await TarefaModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ TarefaDeletada, msg: "Tarefa deletado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = TarefaController;