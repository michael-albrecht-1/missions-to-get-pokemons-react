import {
  PokemonTypeWithIcons,
  POKEMON_TYPES_WITH_ICONS,
} from "./pokemon-types-with-icons.inmemory";
import { Chip, Icon } from "@mui/material";
import { Stack } from "@mui/system";

export default function PokemonTypesBadges({
  pokemonTypes,
}: {
  pokemonTypes: string[];
}) {
  const pokemonsTypesWithIcons = pokemonTypes?.reduce(
    (acc: PokemonTypeWithIcons[], type: string) => {
      const pokemonTypeWithIcon = POKEMON_TYPES_WITH_ICONS.find(
        (pokemonTypeWithIcon) => pokemonTypeWithIcon.name === type
      );
      if (pokemonTypeWithIcon) {
        acc.push(pokemonTypeWithIcon);
      }
      return acc;
    },
    []
  );

  return (
    <Stack direction="row">
      {pokemonsTypesWithIcons?.map((type: PokemonTypeWithIcons) => (
        <Chip
          key={type.name}
          icon={<Icon component={type.logo} />}
          label={type.name}
          color="primary"
          variant="outlined"
          sx={{
            marginRight: 1,
            ".MuiChip-label": { color: type.color },
            ".MuiChip-icon": { color: type.color },
          }}
        />
      ))}
    </Stack>
  );
}
