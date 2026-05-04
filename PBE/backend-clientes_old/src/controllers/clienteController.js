import {} from "../dtos/createClienteDTO.js";

export class ClienteController{
    constructor(){
        this.clienteService = this.clienteService
    }

    listar = (req, res) => {
        try{
            const clientes = this.clienteService.listarClientes()
            return res.status(200).json(clientes)
        } catch (er){
            return res.status(500).json({erro : er.message })
        }
    }

    criar = (req, res) => {
        try{
            const dto = createClienteDTO(req.body)
            // const clienteCriado = this.clienteService.cadastrarCliente(dto)
            // return res.status(201).json(clienteCriado)
            
            return res.status(201).json({
                mensagem: 'Cliente recebido com sucesso',
                cliente: dto
            })


        }catch (er) {
            console.log("Erro ao criar cliente:", er.message)

            return res.status(400).json({erro : er.message})
        }
    }
}