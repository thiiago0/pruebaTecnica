import React from "react";
import { usePokemonList } from "../hooks/usePokemonList";
import { CardPokemon } from "../components";
import "./home.css";
export const Home = () => {
  const { pokemons } = usePokemonList();
  return (
    <div className="container-home">
      <h1 style={{ marginTop: "200px" }}>Hola Pokemons</h1>
      {/* {pokemons.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
        // aqui usar la card de pokemon usando el ID
      ))} */}
      <div className="card-container">
        {pokemons.map((p, index) => (
          <CardPokemon key={p + index} pokemon={p} id={index + 1} />
        ))}
      </div>
    </div>
  );
};
