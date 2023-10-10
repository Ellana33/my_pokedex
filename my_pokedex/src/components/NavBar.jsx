import React from 'react';

function NavBar(props) {
    const { pokemonList, setPokemonIndex } = props;

    const handlePokemonClick = (index) => {
        setPokemonIndex(index);
        const pokemon = pokemonList[index];

        if (pokemon.name === 'pikachu') {
            alert("pika pikachu !!!");
        }
    };

    return (
        <div>
            <ul>
                {pokemonList.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => handlePokemonClick(index)}>{pokemon.name}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavBar;
