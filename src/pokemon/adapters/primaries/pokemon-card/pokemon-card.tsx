import { Pokemon } from "../../../domain/entity/pokemon";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {

    return (
        <Card sx={{
            maxWidth: 280,
            margin: "0 auto",
            padding: "1em",
        }} >
            <CardMedia
                component="img"
                sx={{ height: 150, objectFit: "contain", margin: 'auto' }}
                image={getImgSrc(pokemon.snapshot().number)}
                title={pokemon.snapshot().name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon.snapshot().name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
}

const getImgSrc = (pokemonNumber: string): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg`;
}
