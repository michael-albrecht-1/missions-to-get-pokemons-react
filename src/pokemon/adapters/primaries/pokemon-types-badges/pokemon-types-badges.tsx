import {
  PokemonTypeWithIcons,
  POKEMON_TYPES_WITH_ICONS,
} from "./pokemon-types-with-icons.inmemory";
import { Icon } from "@mui/material";
import { Stack } from "@mui/system";

export default function PokemonTypesBadges({
  pokemonTypes,
}: {
  pokemonTypes: string[];
}) {
  const pokemonsTypesWithIcons = pokemonTypes.reduce(
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
      {pokemonsTypesWithIcons.map((type: PokemonTypeWithIcons) => (
        <Icon
          key={type.name}
          sx={{ color: type.color, marginRight: 1 }}
          component={type.logo}
          aria-label={type.name}
        />
      ))}
    </Stack>
  );
}
