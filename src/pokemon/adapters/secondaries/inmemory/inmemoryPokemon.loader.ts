import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";
import { Pokemon } from "../../../domain/entity/pokemon";
import { PokemonLoader } from "../../../usecases/loaders/PokemonLoader";

export class InMemoryPokemonLoader implements PokemonLoader {
  #pokemons$: Subject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  constructor(private pokemons: Pokemon[]) {
    this.#pokemons$.next(pokemons);
  }

  all(): Observable<Pokemon[]> {
    return this.#pokemons$;
  }

  get(number: string): Observable<Pokemon> {
    return this.#pokemons$.pipe(
      map(
        (pokemons: Pokemon[]): Pokemon =>
          pokemons.filter(
            (pokemon: Pokemon) => pokemon.snapshot().number === number
          )[0]
      )
    );
  }
}
