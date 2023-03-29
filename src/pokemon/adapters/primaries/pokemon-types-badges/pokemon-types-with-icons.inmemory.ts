import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GrassIcon from "@mui/icons-material/Grass";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import TornadoIcon from "@mui/icons-material/Tornado";
import PublicIcon from "@mui/icons-material/Public";
import ShieldIcon from "@mui/icons-material/Shield";
import PestControlIcon from "@mui/icons-material/PestControl";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterIcon from "@mui/icons-material/Water";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";
import CastleIcon from "@mui/icons-material/Castle";

export interface PokemonTypeWithIcons {
  name: string;
  color: string;
  logo: React.FC;
}

export const POKEMON_TYPES_WITH_ICONS: PokemonTypeWithIcons[] = [
  {
    name: "normal",
    logo: GitHubIcon,
    color: "#ffc107",
  },
  {
    name: "fighting",
    logo: SportsMmaIcon,
    color: "#9950ab",
  },
  {
    name: "flying",
    logo: TornadoIcon,
    color: "white",
  },
  {
    name: "poison",
    logo: CoronavirusIcon,
    color: "#298f29",
  },
  {
    name: "ground",
    logo: PublicIcon,
    color: "#763e3e",
  },
  {
    name: "rock",
    logo: ShieldIcon,
    color: "#8b8b8b",
  },
  {
    name: "bug",
    logo: PestControlIcon,
    color: "green",
  },
  {
    name: "ghost",
    logo: CastleIcon,
    color: "#e16a6a",
  },
  {
    name: "steel",
    logo: BatterySaverIcon,
    color: "grey",
  },
  {
    name: "fire",
    logo: LocalFireDepartmentIcon,
    color: "#e3462d",
  },
  {
    name: "water",
    logo: WaterIcon,
    color: "#6bb4ff",
  },
  {
    name: "grass",
    logo: GrassIcon,
    color: "#6ee96e",
  },
  {
    name: "electric",
    logo: FlashOnIcon,
    color: "yellow",
  },
  {
    name: "psychic",
    logo: RssFeedIcon,
    color: "pink",
  },
  {
    name: "ice",
    logo: AcUnitIcon,
    color: "white",
  },
  {
    name: "dragon",
    logo: LocalFireDepartmentIcon,
    color: "orange",
  },
  {
    name: "dark",
    logo: DarkModeIcon,
    color: "violet",
  },
  {
    name: "fairy",
    logo: AutoFixHighIcon,
    color: "#ffb6e2",
  },
];
