import { useEffect, useState } from 'react'
import './App.css'
import { Pokemon } from './pokemon/domain/entity/pokemon';
import PokemonCard from './pokemon/adapters/primaries/pokemon-card/pokemon-card';
import { ISearchAllPokemons } from './pokemon/usecases/ISearchAllPokemons';
import { PokeApiPokemonLoader } from './pokemon/adapters/secondaries/real/REST-poke-api/PokeApiPokemon.loader';
import { PokemonLoader } from './pokemon/usecases/loaders/PokemonLoader';
import { ObservableRESTClient } from './config/clients/observable.RESTClient';

function App() {
  const pokemonsSouce: PokemonLoader = new PokeApiPokemonLoader(
    new ObservableRESTClient()
  );
  const iSearchAllPokemons = new ISearchAllPokemons(pokemonsSouce);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    iSearchAllPokemons.execute().subscribe((pokemons: Pokemon[]) => {
      setPokemons(pokemons);
    });
  }, []);

  return (
    <div className="App">
      poke app
      <ul>
        {pokemons.map((p: Pokemon) => (
          <PokemonCard key={p.snapshot().number} pokemon={p} />
        ))}
      </ul>
    </div>
  )
}

export default App
