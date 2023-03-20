import { Pokemon } from "../../../domain/entity/pokemon";


function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return <div className="PokemonCard">{pokemon.snapshot().name}</div>;
}

export default PokemonCard;
