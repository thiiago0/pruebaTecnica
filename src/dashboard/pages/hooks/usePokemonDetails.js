import { useState, useEffect } from "react";
import { getPokemonByID } from "../../../api/pokemonApi";
import { POKEMON_BY_ID_URL } from "../../../Constantes";

export const usePokemonDetails = (id) => {
  const [pokemon, setPokemon] = useState({
    weight: [],
    moves: [],
    sprites: { other: { dream_world: { front_default: "" } } },
  });
  const { moves, sprites, weight } = pokemon;
  const movesToShow = moves.slice(0, 2);

  useEffect(() => {
    const getPokemon = async () => {
      let poke = await getPokemonByID(POKEMON_BY_ID_URL, id);

      setPokemon(poke);
    };
    getPokemon();
  }, [id]);

  return { pokemon, movesToShow, moves, sprites, weight };
};
