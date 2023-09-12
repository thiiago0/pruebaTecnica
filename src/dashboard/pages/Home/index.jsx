import React from "react";
import { usePokemonList } from "../hooks/usePokemonList";

export const Home = () => {
  const { pokemons } = usePokemonList();
  return (
    <div>
      <h1 style={{ marginTop: "200px" }}>Hola Pokemons</h1>
      {pokemons.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
        // aqui usar la card de pokemon usando el ID
      ))}
    </div>
  );
};
