export function createClienteDTO(data) {
    const { nome, email, idade} = data;

    //validação de entrada / formato
    if (typeof nome !== "string" || nome.trim() === ""){
        throw new Error("Campo 'nome' é obrigatório");
    }

    if (typeof email !== "string" || !email.includes("@")){
        throw new Error("Campo 'email' inválido.");
    }

    if (typeof idade !== "number" || Number.isNaN(idade)) {
        throw new Error("Campo 'idade' deve ser numérico.")
    }

    if (idade<=0){
        throw new Error("Campo 'idade' não pode ser zero ou negativo")
    }

    return {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        idade
    }
}