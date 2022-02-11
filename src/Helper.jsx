const pokemonAPIlink = `https://pokeapi.co/api/v2/pokemon/`;
const imageAPIlink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

const changeNumbertoString = (number) => {
    if (number > 99)
        return number;
    if (number > 9)
        return `0${number}`;

    return `00${number}`;
}

export { changeNumbertoString, pokemonAPIlink, imageAPIlink };