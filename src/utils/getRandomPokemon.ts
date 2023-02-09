import { PokemonClient } from "pokenode-ts";

export default function getRandomPokemon(id: number) {
  const api = new PokemonClient();

  const pokemon = api.getPokemonById(id);

  return pokemon;
}
