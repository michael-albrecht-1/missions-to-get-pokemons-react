import { useEffect, useState } from 'react'
import './App.css'
import { Pokemon } from './pokemon/domain/entity/pokemon';
import PokemonCard from './pokemon/adapters/primaries/pokemon-card/pokemon-card';
import { ISearchAllPokemons } from './pokemon/usecases/ISearchAllPokemons';
import { PokeApiPokemonLoader } from './pokemon/adapters/secondaries/real/REST-poke-api/PokeApiPokemon.loader';
import { PokemonLoader } from './pokemon/usecases/loaders/PokemonLoader';
import { ObservableRESTClient } from './config/clients/observable.RESTClient';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {pokemons.map((p: Pokemon) => (
            <Grid xs={12} md={6} lg={4}>
              <PokemonCard key={p.snapshot().number} pokemon={p} />
            </Grid>
          ))}
        </Grid></Box>
    </div >
  )
}

export default App
