import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import { Capitalize } from "../../utils/helpers";
import { IPokemonsData, IPokemonData } from "../../utils/interfaces";
import { getFilteredPokemons } from "../../utils/utilities";

import "./index.css";

const AllPokemon = ({ data }: IPokemonsData) => {
  const [searchTerm, setSearchTerm] = useState("");

  const displayAllPokemon = () => {
    const pokemons = useMemo(
      () =>
        getFilteredPokemons(data, searchTerm).map(
          (pokemonData: IPokemonData) => (
            <Link
              state={{ pokemon: pokemonData }}
              to={`/${pokemonData.name}`}
              className="pokemon-card"
              key={`pokemon-${pokemonData.name}`}
            >
              <span className="pokemon-name">
                {Capitalize(pokemonData.name)}
              </span>
            </Link>
          )
        ),
      [searchTerm]
    );
    return pokemons;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="pokemon-all-container">
      <div className="pokemon-search-bar">
        <h2>Search Pokémon</h2>
        <input onChange={(event) => handleSearch(event)}></input>
      </div>
      <div className="pokemon-container">{displayAllPokemon()}</div>
    </div>
  );
};

export default AllPokemon;
