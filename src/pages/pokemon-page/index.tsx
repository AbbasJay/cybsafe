import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Capitalize } from "../../utils/helpers";
import { IPokemonData } from "../../utils/interfaces";
import {
  getImgSrc,
  getRandomType,
  getAbilities,
  getMoves,
  getHp,
} from "../../utils/utilities";

import "./index.css";

const Pokemon = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const pokemonData = await fetch(location.state.pokemon.url);
        const pokemonsData = await pokemonData.json();

        await setPokemon(pokemonsData);
      } catch (err) {
        console.log("Error occurred when fetching Pokemon");
      }
    };
    getPokemonData();
  }, []);

  const {
    name,
    sprites,
    types,
    abilities,
    stats,
    moves,
  }: IPokemonData | any = pokemon;

  return Object.keys(pokemon).length === 0 ? (
    <h1 className="pokemon-loading">Loading Pokemon...</h1>
  ) : (
    <div className="pokemon-page">
      <Link className="return-link" to="/">
        Return to Pokemon
      </Link>
      <div className="pokemon">
        <div className="pokemon-name-health">
          <span>{Capitalize(name)}</span>
          <span>{getHp(stats)}</span>
        </div>

        <img
          className="pokemon-img"
          src={getImgSrc(sprites)}
          alt={`this in an image of the pokemon ${name}`}
        ></img>

        <span className="pokemon-description">
          {`${Capitalize(name)} is a ${getRandomType(types)} type pokemon.`}
        </span>

        <div className="pokemon-characteristics">
          <span>Abilities</span>
          <div>{getAbilities(abilities, 2)}</div>
        </div>

        <div className="pokemon-characteristics">
          <span>Moves</span>
          <div>{getMoves(moves, 3)}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
