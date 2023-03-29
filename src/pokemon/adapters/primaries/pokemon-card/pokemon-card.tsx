import { Pokemon } from "../../../domain/entity/pokemon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import PokemonTypesBadges from "../pokemon-types-badges/pokemon-types-badges";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        padding: "1em",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Chip
          sx={{ marginLeft: 1 }}
          label={`#${pokemon.snapshot().number}`}
          color="primary"
          variant="outlined"
        />
        <div></div>
      </Stack>
      <CardMedia
        component="img"
        sx={{ height: 150, objectFit: "contain", margin: "auto" }}
        image={getImgSrc(pokemon.snapshot().number)}
        title={pokemon.snapshot().name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.snapshot().name}
        </Typography>

        <PokemonTypesBadges pokemonTypes={pokemon.snapshot().types} />
      </CardContent>
    </Card>
  );
}

const getImgSrc = (pokemonNumber: string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg`;
};
