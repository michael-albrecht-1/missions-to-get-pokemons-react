import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { ObservableRESTClient } from "../../../../config/clients/observable.RESTClient";
import { Pokemon } from "../../../domain/entity/pokemon";
import { ISearchAllPokemons } from "../../../usecases/ISearchAllPokemons";
import { PokemonLoader } from "../../../usecases/loaders/PokemonLoader";
import { PokeApiPokemonLoader } from "../../secondaries/real/REST-poke-api/PokeApiPokemon.loader";
import PokemonCard from "../pokemon-card/pokemon-card";

export default function Pokemons() {
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {pokemons.map((p: Pokemon) => (
          <Grid key={p.snapshot().number} xs={12} sm={6} md={4} lg={3} xl={2}>
            <PokemonCard pokemon={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
