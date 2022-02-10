const pokemonAPIlink = `https://pokeapi.co/api/v2/pokemon/`;
const imageAPIlink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

function CodeGenerator(state) {
    return (
        state.map(item => (
            <div key={item.name} className="card">
                <img src={item.image_source} alt={item.name} className="image" />
                <div className="CardContent">
                    <div className="name">
                        {item.name}
                    </div>
                    <div className="baseExperience">
                        {item.baseExperience}
                    </div>
                </div>
            </div>
        ))
    )
}

const changeNumbertoString = (number) => {
    if (number > 99)
        return number;
    if (number > 9)
        return `0${number}`;

    return `00${number}`;
}

export { changeNumbertoString, pokemonAPIlink, imageAPIlink, CodeGenerator };