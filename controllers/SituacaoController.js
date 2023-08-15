//importar meu modelo
//importat com ./ quando o arquivo esta na mesma pasta
//importar com ../ quando o arquivo esta em outra pasta
//para voltar niveis eu preciso usar ../
// C:\Users\islaine.8930\Documents\Islaine\agenda-backend-senac-main\controllers> sai da pasta contoller e volta para a geral e em seguida para models
// C:\Users\islaine.8930\Documents\Islaine\agenda-backend-senac-main\models>
const {Situacao:SituacaoModel}= require("../models/Situacao")

const SituacaoController = {
    
    //=CRUD
    //Criar = Create
    create : async (req, res) => {
        //sincrono : executar na sequencia
        //assincrono : executar em paralelo ou for de sincronia
        //req - resqust = o que o usuario que ver, salvar ou pesquisar
        //res - response = a responsta do servidor

        //POST - envia dados no corpo(body) da requisição
        try{
            //tente fazer algo
            //data ou nome do modelo
            //$data php é muito comum '$data = $request->all()' não recomendado
            //const data = req.body
            const situacao = {
               // nome: res.data.nome = uso o data quando é a responta para o frontend
               nome: req.body.nome // quando busco uso o BODY para o servidor processar
            }
            const response = await SituacaoModel.create(situacao)
            res.status(201).json({response, msg: "Criado com sucesso!"})
        }catch (error) {
            //em caso de erro retorne
            console.log(error)
            res.status(400).json({msg: "Não foi possível salvar"})
        }
    }

    //Ler = Read
    //Atualizar = Update
    //Remover = Delete

}

