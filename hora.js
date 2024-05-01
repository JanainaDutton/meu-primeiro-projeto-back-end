const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mmostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/hora', mmostraHora))
app.listen(porta, mostraPorta)