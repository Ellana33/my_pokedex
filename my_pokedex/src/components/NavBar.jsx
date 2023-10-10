import React from 'react';

function NavBar(props) {
    const { pokemonIndex, pokemonList, handleNextClick, handlePreviousClick } = props;
    return (
        <div>
            {pokemonIndex > 0 && <button onClick={handlePreviousClick}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick}>Suivant</button>}
            <p>{pokemonIndex + 1} / {pokemonList.length}</p>
        </div>
    )
}

export default NavBar;
