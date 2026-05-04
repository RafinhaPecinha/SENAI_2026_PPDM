import express from "express"; 
import { ClienteController } from "./controllers/clienteController.js"

const app = express()
app.use(express.json())

//criação de um objeto da classe ClienteController
const clienteCotroller = new ClienteController
// const clienteController = new ClienteController(clienteService)

// Rotas
app.post("/clientes", clienteCotroller.criar)

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})