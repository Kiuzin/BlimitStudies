fetch('https://pokeapi.co/api/v2/pokemon/Phanpy')
.then(response => response.json())
.then(responseJSON => console.log(
    "O nome do pokémon é:", responseJSON.name,
    "\nSeu número na pokédex é:", responseJSON.order,
    "\nE possui as seguintes tipagens:", responseJSON.types))
.catch(e => console.error(e))