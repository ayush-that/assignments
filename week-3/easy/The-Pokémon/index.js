let pokemon = [];
let numberOfPokemon = 0;

function generate() {
  numberOfPokemon = parseInt(document.querySelector("#number").value, 10);
  const categoryId = document.querySelector("#category").value;

  fetch(`https://pokeapi.co/api/v2/type/${categoryId}/`)
    .then((response) => response.json())
    .then((data) => {
      pokemon = data.pokemon
        .slice(0, numberOfPokemon)
        .map((p) => p.pokemon.name);
      render();
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function pokemonComponent(pokemonName) {
  const div = document.createElement("div");
  div.className = "bg-pink-400 p-4 m-2 rounded shadow-md text-center w-32";

  const h3 = document.createElement("h3");
  h3.className = "text-xl font-bold text-white";
  h3.innerHTML = pokemonName;

  div.appendChild(h3);
  return div;
}

function render() {
  const resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = "";
  pokemon.forEach((pokemonName) => {
    const card = pokemonComponent(pokemonName);
    resultDiv.appendChild(card);
  });
}
