import createHttpClient from "@/infrastructures/createHttpClient";

const pokemonService = createHttpClient(import.meta.env.VITE_POKEMON_SERVICE_URL);

const paths = {
  sets: "/api/pokemons/en/sets",
  cards: "/api/pokemons/en/cards",
};

export default {
  async getPokemonSets() {
    return await pokemonService.get(
      `${paths.sets}`,
    );
  },
  async getPokemonSet(id) {
    return await pokemonService.get(`${paths.sets}/${id}`);
  },
  async getPokemons(setId) {
    return await pokemonService.get(
      `${paths.cards}?setId=${setId}`,
    );
  },
  async getPokemon(id) {
    return await pokemonService.get(`${paths.cards}/${id}`);
  },
};
