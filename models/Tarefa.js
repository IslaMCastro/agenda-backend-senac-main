//Importar o Moongose
const mongoose = require('mongoose')

//Importar Situação
const situacaoSchema = require('Situacao')

//Extrair o schema
const {Schema} = mongoose

//Criar o modelo
const tarefaSchema = new Schema({
    assunto : {
        type: String,
        require: true
    }
    descricao
    }
},{timestamps:true})


//Definir o modelo no moongose
const Tarefa = mongoose.model("Tarefa",tarefaSchema)

//Exportar

module.exports = ([
    Tarefa,
    tarefaSchema
    
])