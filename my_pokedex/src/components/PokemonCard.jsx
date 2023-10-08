import React from 'react';

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[0];
    if (pokemon.imgSrc) {
        return (
            <figure><img src={pokemon.imgSrc} alt={pokemon.name}></img>
            <figcaption>{pokemon.name}</figcaption></figure>
        )
    } else {
        return (
            <p>???</p>
        )
    }
    return (
        <figure><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"></img>
        <figcaption>Bulbasaur</figcaption></figure>
    )
}

export default PokemonCard;
