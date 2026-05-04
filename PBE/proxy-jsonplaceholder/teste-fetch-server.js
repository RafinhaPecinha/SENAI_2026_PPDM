async function main() {
    const resp = await fetch("http://localhost:3000/api/posts");
    const json = await resp.json();

    console.log(json.count);
    console.log(json.data[0]);
    console.log("URL:", json.data[0].url);
};

main(); 