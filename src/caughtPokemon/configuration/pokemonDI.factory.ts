import { ObservableRESTClient } from "../../config/clients/observable.RESTClient";
import { LoaderSource } from "../../sources";
import { InMemoryCaughtPokemonsLoader } from "../adapters/secondaries/inmemory/inMemoryCaughtPokemons.loader";
import { CaughtPokemonMongoLoader } from "../adapters/secondaries/real/REST-mongo/caughtPokemonMongo.loader";
import { CaughtPokemon } from "../domain/entity/caughtPokemon";
import { pokemonSources } from "./pokemonSources";

export class CaughtPokemonDIFactory {
  static pokemonCaughtLoader(
    http: ObservableRESTClient
  ): CaughtPokemonMongoLoader | InMemoryCaughtPokemonsLoader {
    switch (pokemonSources.pokemonLoader) {
      case LoaderSource.mongo:
        return new CaughtPokemonMongoLoader(http);
      default:
        const Snorlax: CaughtPokemon = new CaughtPokemon({
          number: "143",
          name: "Snorlax",
        });
        const Zangoose: CaughtPokemon = new CaughtPokemon({
          number: "335",
          name: "Zangoose",
        });
        return new InMemoryCaughtPokemonsLoader([Snorlax, Zangoose]);
    }
  }
}
