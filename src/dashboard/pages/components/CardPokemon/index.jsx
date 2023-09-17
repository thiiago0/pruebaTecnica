import React from "react";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import "./cardPokemon.css";
export const CardPokemon = ({ id }) => {
  const { pokemon, movesToShow, moves, sprites, weight } =
    usePokemonDetails(id);

  return (
    <div className="pokemon-card" key={pokemon.name}>
      <div className="card-top">
        <div className="img-container">
          {sprites.front_default && (
            <img
              className="poke-img"
              src={sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          )}
        </div>
        <div className="button-container">
          <button className="btn-weigth">Weigth:{pokemon.weight}</button>
        </div>
      </div>
      <div className="card-botton">
        <h2 className="card-name">{pokemon.name}</h2>
        <ul className="card-moves">
          {movesToShow.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
