import React from "react";

import { Capitalize } from "./helpers";
import {
  IAbilities,
  IAllPokemonData,
  IMoves,
  ISprites,
  IStats,
  IType,
} from "./interfaces";

export const getImgSrc = (sprites: ISprites): string | undefined => {
  if (sprites) {
    const { other, back_default, front_shiny } = sprites;
    const { dream_world } = other;
    const officialArtwork = other["official-artwork"];

    return (
      dream_world.front_default ||
      officialArtwork.front_default ||
      back_default ||
      front_shiny
    );
  }
};

export const getHp = (stats: Array<IStats>) =>
  stats ? `${stats[0].stat.name}${stats[0].base_stat}` : "";

export const getRandomType = (types: Array<IType>) => {
  const number = Math.floor(Math.random() * types.length);
  return types[number].type.name;
};

export const getAbilities = (
  abilities: Array<IAbilities>,
  numberOfAbilities: number
) =>
  abilities
    .slice(0, numberOfAbilities)
    .map((abilityData: IAbilities) => (
      <span key={`ability-${abilityData.ability.name}`}>
        {Capitalize(abilityData.ability.name)}
      </span>
    ));

export const getMoves = (moves: Array<IMoves>, numberOfMoves: number) =>
  moves
    .slice(0, numberOfMoves)
    .map((moveData: IMoves) => (
      <span key={`ability-${moveData.move.name}`}>
        {Capitalize(moveData.move.name)}
      </span>
    ));

export const getFilteredPokemons = (
  data: IAllPokemonData,
  searchTerm: string
) => {
  debugger;
  let pokemons = [...data.results];

  const result = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchTerm)
  );
  return result;
};
