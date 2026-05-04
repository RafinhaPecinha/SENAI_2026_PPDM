async function main() {
    try {
        /*
        objetivo buscar api/posts do servidor express(localhost)
        signal timeout: cancela a requisição se demorar mais que 5 segundos
        */
        const resp = await fetch("http://localhost:3000/api/posts", {
            signal: AbortSignal.timeout(5000)
        })

        if (!resp.ok){
            // se falhar ao ler o corpo(bod-y), usa string vazia
            const body = await resp.text().catch(()=>"")

            // Lançar erro manualmene para cair no catch
            // Monta uma mensagem com status = statusText + body
            throw new Error(`HTTP ${resp.status} ${resp.statusText} | ${body}`);
        }

        // Converter o corpo da resposta para json (depois do ok)
        const json = await resp.json()

        console.log("Count: ",json.data.posts.length);
        console.log(json.data.posts[0])
        

    } catch(erro) {

    } 
}

main()