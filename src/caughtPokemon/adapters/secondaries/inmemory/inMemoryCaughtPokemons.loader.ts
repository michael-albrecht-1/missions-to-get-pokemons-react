import { Observable, of } from 'rxjs';
import { CaughtPokemonLoader } from '../../../usecases/loaders/caughtPokemon.loader';

export class InMemoryCaughtPokemonsLoader implements CaughtPokemonLoader {
  constructor(private caughtPokemons: any[]) {}

  public get(): Observable<any> {
    return of(this.caughtPokemons);
  }
}
