# backend-clientes

Exemplo didático de arquitetura em camadas com:

- Express
- SQLite
- DTO
- Controller
- Service
- Domínio
- Repositório

## Como usar

### 1. Criar a estrutura
Este projeto foi gerado pelo script `create_backend_clientes.sh`.

### 2. Entrar na pasta
```bash
cd backend-clientes
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Rodar
```bash
npm start
```

## Testes

### Listar clientes
```bash
curl http://localhost:3000/clientes
```

### Criar cliente
```bash
curl -X POST http://localhost:3000/clientes \
  -H "Content-Type: application/json" \
  -d '{"nome":"Marcos Silva","email":"marcos@email.com","idade":25}'
```