import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllPokemon from "./components/all-pokemon";
import Pokemon from "./pages/pokemon-page";

import "./App.css";

const App = () => {
  const [pokemonData, setPokemonData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const pokemons = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        const pokemonJson = await pokemons.json();

        await setPokemonData(pokemonJson);
        await setLoading(false);
      } catch (err) {
        console.log("Error occurred when fetching Pokemon");
      }
    };

    getPokemonData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          loading ? (
            <h1 className="pokemon-loading">Loading Pokemon...</h1>
          ) : (
            <AllPokemon data={pokemonData} />
          )
        }
      />
      <Route path="/:id" element={<Pokemon />} />
    </Routes>
  );
};

export default App;
