const input = document.querySelector("#inputPokemon"); //obtenemos el input del HTML
const button = document.querySelector("#botonPokemon"); //obtenemos el boton del HTML
const pokemonContainer = document.querySelector("#cardPokemon"); //obtenemos el contenedor de los pokemon desde el HTML

button.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
    e.preventDefault(); //evitamos que el navegador se recargue
    traerPokemon(input.value); //llamamos a la funcion traerPokemon, pasandole el valor del input
}
);

function traerPokemon(pokemon){ //funcion que trae los pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //realizamos la peticion a una URL
        .then(res => res.json()) //cuando la promesa es resuelta, asignamos la info a la variable res
        .then((data) => { //
            crearPokemon(data); //llamamos a la funcion crearPokemon, pasandole la informacion del pokemon
        });
}

function crearPokemon(pokemon){
    const imgPokemon = document.createElement("img"); //creamos un elemento img donde pondremos la imagen
    imgPokemon.src = pokemon.sprites.front_default; //establecemos la imagen de nuestro pokemon, sacamos el sprite del .json

    const nombrePokemon = document.createElement("h3"); //creamos un elemento h3 donde pondremos el nombre de nuestro pokemon
    nombrePokemon.textContent = pokemon.name; //establecemos el nombre de nuestro pokemon, sacamos el nombre del .json

    const idPokemon = document.createElement("h3"); //creamos un elemento h3 donde pondremos el tipo de nuestro pokemon
    idPokemon.textContent = pokemon.id;

    const separador = document.createElement("hr");//le damos un bonito separador a cada pokemon

    const div = document.createElement("div"); //creamos un elemento div donde pondremos el numero de nuestro pokemon


    
    div.appendChild(nombrePokemon); //agregamos el nombre al div
    div.appendChild(imgPokemon); //agregamos la imagen al div
    div.appendChild(idPokemon); //agregamos el tipo de pokemon
    div.appendChild(separador); //agregamos el separador

    pokemonContainer.appendChild(div); //agregamos el div al contenedor de los pokemon
    
}

traerPokemon(); //llamamos a la funcion traerPokemon, para que nos traiga los pokemon que queramos

