    // [F1] Carregar dependências

    // Express: cria servidor e rotas
    const express = require("express");

    // Axios: faz requisições HTTP para APIs externas
    const axios = require("axios");

    //CORS: libera o front-end (outras origens) acessarem este back-end
    const cors = require("cors");

    // =================================================================================================================

    //[F2] Criar a aplicação (instância do servidor)
    const app = express();

    // =================================================================================================================

    //[F3] Configurar middlewares globais (para todas as rotas)

    //Habilitar CORS (evita bloqueio do navegador por Same-Origin Policy)
    app.use(cors());

    //Habilitar JSON  no body (permitir ler req.body em requisições com JSON)
    app.use(express.json());

    // =================================================================================================================

    // [F4] Definir configurações/constantess do projeto
    //BASE_URL = endereço da API externa que este servidor vai "proxiar"
    const BASE_URL = "https://dummyjson.com";

    // =================================================================================================================

    //[F5] Definir rotas básicas (raiz e status)
    //Rota de status (healthcheck)
    //Objetivo: teste rápido para saber se o servidor está no ar
    // GET /health -> {ok:true}
    app.get("/health", (req, res) =>{
        res.json({ ok: true});
    });

    //Rota raiz (home)
    //Objetivo: mensagem amigável + lista de rotas disponíveis
    //GET / -> HTML simples
    app.get("/", (req, res) =>{
        res.status(200).send(`
            <h1>Minha API está no ar \u2705</h1>
            <p>Rotas Disponíveis</p>
            <ul>
                <li><a href="/health">/health</a></li>
                <li><a href="/api/posts">/api/posts</a></li>
            </ul>
        `);
    });

    //==================================================================================================================

    // [F6] Rota principal(proxt de posts)
    //[F6.1] Recebe requisição do cliente
    //[GET/api/posts] -> busca post na API externa e devolve em um formato padronizado
    app.get("/api/posts", async (req, res) => {
        try {
            const response = await axios.get(`${BASE_URL}/posts`);

            //[F6.3] Montar a resposta de sucesso (envelope padronizado)
            // source: indentificar a origem dos dados
            // count: quantidade de itens recebidos 
            // data: lista de posts 
            res.status(200).json({
                source: "dummyjson",
                count: response.data.length,
                data: response.data,
            })

        } catch (err) {
        res.status(502).json({
            message: "Falha ao consultar a API",
            detail: err.message
        });
    }
});

    // =================================================================================================================

    //[F7]  Iniciar servidor
    //Sobe o servidor na porta 3000 e imprime uma mensagem amigável
    app.listen(3000, () => {
        console.log("API proxy rodando em: http://localhost:3000");
    });

    // =================================================================================================================