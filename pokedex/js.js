const input = document.getElementById("pk");
const but = document.getElementById("but");
const nome = document.getElementById("nome");
const img = document.getElementById("img");
const mega = document.getElementById("mega");
const gmax = document.getElementById("gmax");

function gerarPokemon(){
    const url = "https://pokeapi.co/api/v2/pokemon/" + input.value
    fetch(url)
    .then(response => response.json())
    .then((dados) => {

        nome.value = dados.name
        img.src = dados.sprites.other.showdown.front_default
        img.style.height = "200px"
        img.style.width = "200px"
    })




    console.log("funcionou")
}


function evo(){
    const url = "https://pokeapi.co/api/v2/pokemon/" + input.value + "-mega"
    fetch(url)
    .then(response => response.json())
    .then((dados) => {

        mega.src = dados.sprites.other.showdown.front_default
        img.style.height = "200px"
        img.style.width = "200px"
    })
}

but.addEventListener("click", gerarPokemon)
but.addEventListener("click", evo)