import { useEffect, useState } from "react";
import "./App.css";
import { Pokemon } from "./pokemon/domain/entity/pokemon";
import PokemonCard from "./pokemon/adapters/primaries/pokemon-card/pokemon-card";
import { ISearchAllPokemons } from "./pokemon/usecases/ISearchAllPokemons";
import { PokeApiPokemonLoader } from "./pokemon/adapters/secondaries/real/REST-poke-api/PokeApiPokemon.loader";
import { PokemonLoader } from "./pokemon/usecases/loaders/PokemonLoader";
import { ObservableRESTClient } from "./config/clients/observable.RESTClient";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import Pokemons from "./pokemon/adapters/primaries/pokemons/pokemons";
import Navbar from "./core/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Navbar />
          </Grid>
          <Grid xs={12}>
            <Pokemons />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
