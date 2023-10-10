import React, { useState } from 'react';
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard';
import './App.css';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App;
