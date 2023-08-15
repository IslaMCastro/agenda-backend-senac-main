const mongoose = require('mongoose')

async function main() { //toda vez que for importar algo que eu não conheço fazer o TRY/Catch
    try {

        mongoose.set("strictQuery",true)
      
        await mongoose.connect("mongodb+srv://islamoraescastro:eduGc4WjFL3l7gAT@activity.hoixesw.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao Banco!")

    } catch (error) { 
        console.log(`Erro: ${error}`) //uso crase ` quando tem o $
    }
}

//Não esquecer de importar
module.exports = main 

