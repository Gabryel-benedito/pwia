const input = document.getElementById("pk");
const but = document.getElementById("but");
const nome = document.getElementById("nome");
const img = document.getElementById("img");
const mega = document.getElementById("mega");
const gmax = document.getElementById("gmax");
const tipo1 = document.getElementById("tipo1");
const tipo2 = document.getElementById("tipo2");
const conteiner = document.getElementById("cont");


function gerarPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase();
    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.error("Pokémon não encontrado"); return
            }
            return response.json();
        })

        .then((dados) => {

            nome.value = dados.name
            img.src = dados.sprites.other.showdown.front_default
            img.style.height = "200px"
            img.style.width = "200px"
            tipo1.value = dados.types[0].type.name
            tipo2.value = dados.types[1] ? dados.types[1].type.name : "Nenhum"

        })




    console.log("funcionou")
}


function evo() {
    const url = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase() + "-mega"
    fetch(url)
        .then(response => response.json())
        .then((dados) => {


            mega.src = dados.sprites.other.showdown.front_default
            mega.style.height = "200px"
            mega.style.width = "200px"
        })
}


const mouse = {
    pressiona: false,
    posicaoInicial: 0
}



/*function mudaImagem(direcao) {



    const url = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase()
    fetch(url)
        .then(response => response.json())
        .then((dados) => {

            let imagens = [
                img.src = dados.sprites.other.showdown.front_default,
                img.src = dados.sprites.other.showdown.back_default,
                img.src = dados.sprites.other.showdown.front_shiny,
                img.src = dados.sprites.other.showdown.back_shiny,

            ]
            

            img.style.height = "200px"
            img.style.width = "200px"


            let indiceAtual = imagens.indexOf(img.src);
            if (direcao < 0) {
                indiceAtual = (indiceAtual + 1) % imagens.length; // Avança para a próxima imagem
            } else {
                indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Volta para a imagem anterior
            }
            img.src = imagens[indiceAtual];
        });

           
                }
            */
    function mudaImagem(direcao) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase();
    fetch(url)
        .then(response => response.json())
        .then((dados) => {
            // Armazena as URLs das imagens em um array
            let imagens = [
                dados.sprites.other.showdown.front_default, // Corrigido para dream_world
                dados.sprites.other.showdown.back_default,
                dados.sprites.other.showdown.front_shiny,
                dados.sprites.other.showdown.back_shiny,
            ];
            img.style.height = "200px";
            img.style.width = "200px";
             // Verifica o índice da imagem atual
            let indiceAtual = imagens.indexOf(img.src);
            if (indiceAtual === -1) {
                // Se a imagem atual não estiver no array, comece com a primeira imagem
                indiceAtual = 0;
            }
            // Avança ou retrocede na lista de imagens
            if (direcao < 0) {
                indiceAtual = (indiceAtual + 1) % imagens.length; // Avança para a próxima imagem
            } else {
                indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Volta para a imagem anterior
            }
            img.src = imagens[indiceAtual];
        });
}






but.addEventListener("click", gerarPokemon)
//img.addEventListener("click", evo)
img.addEventListener("click", () => mudaImagem(-1));