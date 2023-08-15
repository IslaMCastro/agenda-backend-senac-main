const mongoose = require('mongoose')

async function main() {
    try {

        mongoose.set("strictQuery",true)
      
        await mongoose.connect("mongodb+srv://islamoraescastro:eduGc4WjFL3l7gAT@activity.hoixesw.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao Banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main

