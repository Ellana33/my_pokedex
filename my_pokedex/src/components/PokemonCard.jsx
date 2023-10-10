import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard(props) {
    const { pokemon } = props;
    if (pokemon.imgSrc) {
        return (
            <figure><img src={pokemon.imgSrc} alt={pokemon.name}></img>
            <figcaption>{pokemon.name}</figcaption></figure>
        )
    } else {
        return (
            <figure><figcaption>{pokemon.name}</figcaption>
            <p>???</p></figure>
        )
    }
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};

export default PokemonCard;
