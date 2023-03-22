import { Pokemon } from "../../../domain/entity/pokemon";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 260, maxWidth: 300, objectFit: 'contain' }}
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
