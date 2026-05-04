async function main() {
    const resp = await fetch("https://randomuser.me/api");
    const json = await resp.json();

    if (Array.isArray(json)) {
        console.log("Trata-se de um Array");
        console.log(json);
    } else {
        console.log("Trata-se de um objeto");
        //console.log(json.results) //retorna todos os objetos
        //console.log(json.results[0]); //retorna o primeiro post (posicao 0)
        console.log("O nome da pessoa é: ", json.results[0].name.first); //retorna o primeiro post (posicao 0)
    }
   
   
   
    // console.log(json.length);
    // console.log(json[0]);
    // console.log("URL:", json[0].url);
};

main();