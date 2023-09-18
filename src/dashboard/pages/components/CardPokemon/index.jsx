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
        <div className="car-1">
          <h2 className="card-name">{pokemon.name}</h2>
        </div>
        <div className="car-2">
          <ul className="card-moves">
            <div className="list-moves">
              {movesToShow.map((move) => (
                <li className="move-item" key={move.move.name}>
                  #{move.move.name}{" "}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
