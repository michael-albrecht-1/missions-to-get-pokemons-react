import { PokemonBuilder } from "../domain/pokemon.builder";
import { PokemonLoader } from "../usecases/loaders/PokemonLoader";
import { InMemoryPokemonLoader } from "../adapters/secondaries/inmemory/inmemoryPokemon.loader";
import { PokeApiPokemonLoader } from "../adapters/secondaries/real/REST-poke-api/PokeApiPokemon.loader";
import { Pokemon } from "../domain/entity/pokemon";
import { ObservableRESTClient } from "../../config/clients/observable.RESTClient";
import { pokemonSources } from "./pokemonSources";
import { LoaderSource } from "../../sources";

export class PokemonDIFactory {
  static pokemonLoader(): PokemonLoader {
    switch (pokemonSources.pokemonLoader) {
      case LoaderSource.restPokeApi:
        return new PokeApiPokemonLoader(new ObservableRESTClient());
      default:
        const pickachu: Pokemon = new PokemonBuilder()
          .withNumber("25")
          .withName("Pickachu")
          .withDescription("Lorem Ipsum of pickachu")
          .withHeight(1.3)
          .withWeight(0.7)
          .withAvatar("http://via.placeholder.com/475px475")
          .withTypes(["electric"])
          .build();
        const salameche: Pokemon = new PokemonBuilder()
          .withNumber("4")
          .withName("Salameche")
          .withDescription("Lorem Ipsum of salameche")
          .withHeight(1.7)
          .withWeight(30)
          .withAvatar("http://via.placeholder.com/475px475")
          .withTypes(["fire"])
          .build();
        const mewtwo: Pokemon = new PokemonBuilder()
          .withNumber("150")
          .withName("Mewtwo")
          .withDescription("Lorem Ipsum of mewtwo")
          .withHeight(2)
          .withWeight(100)
          .withAvatar("http://via.placeholder.com/475px475")
          .withTypes(["psychic"])
          .build();
        const Snorlax: Pokemon = new PokemonBuilder()
          .withNumber("143")
          .withName("Snorlax")
          .withDescription("Lorem Ipsum of Snorlax")
          .withHeight(3)
          .withWeight(400)
          .withAvatar("http://via.placeholder.com/475px475")
          .withTypes(["normal"])
          .build();
        return new InMemoryPokemonLoader([
          pickachu,
          salameche,
          mewtwo,
          Snorlax,
        ]);
    }
  }
}
