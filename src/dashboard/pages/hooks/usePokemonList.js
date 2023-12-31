import { useEffect, useState } from "react";
import { getFirstTenPokemons } from "../../../api/pokemonApi";
import { API_FIRTS_TEN_POKEMON_URL } from "../../../Constantes";

export const usePokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      let pokes = await getFirstTenPokemons(API_FIRTS_TEN_POKEMON_URL);
      setPokemons(pokes);
    };

    getPokemons();
  }, []); //Arreglo de dependencias -> se ejecuta de nuevo si el valor dentro cambia

  return { pokemons };
};
