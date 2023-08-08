const { default: mongoose } = require("mongoose");



//Use metodo "destructor" para extrais o Schema
const {Schema} = mongoose


//Criar uma constante que sera exportada
//Inserir os dados do nosso banco de dados
const situacaoSchema = new Schema({
    nome : {
        type: String,
        require: true
    }
},{timestamps:true})

const Situacao = mongoose.model("Situação",situacaoSchema)// chamar uma classe de outro arquivo

//Exportar constantes
module.exports = ([
    Situacao,
    situacaoSchema
])
