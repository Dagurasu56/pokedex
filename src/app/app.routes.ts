import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';


const routes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'pokemons', component: PokemonsComponent },
    { path:'pokemon/:id', component: PokemonInfoComponent },
    { path:'search/:name', component: SearchPokemonComponent },
    { path: '**', redirectTo:'home' }
];

export const POKE_ROUTING = RouterModule.forRoot(routes);