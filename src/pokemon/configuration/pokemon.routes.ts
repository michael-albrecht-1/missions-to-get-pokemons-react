import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from '../adapters/primaries/angular/pokemon-details/pokemon-details.component';
import { PokemonListingComponent } from '../adapters/primaries/angular/pokemon-listing/pokemon-listing.component';
export const PokemonRoutes: Routes = [
  {
    path: 'pokedex',
    children: [
      { path: '', component: PokemonListingComponent },
      { path: ':number', component: PokemonDetailsComponent },
    ],
  },
];
