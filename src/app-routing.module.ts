import { NgModule } from "@angular/core";
import{Routes, RouterModule} from "@angular/router";
import { MenuComponent } from "./app/menu/menu.component";
import { PokemonInfoComponent } from "./app/pokemon-info/pokemon-info.component";


const routes: Routes =[
{path: 'home', component: MenuComponent},
{path: 'pokemonInfo/:id', component: PokemonInfoComponent},
{path: '', pathMatch:'full',redirectTo:'home'},
{path: '**', pathMatch:'full',redirectTo:'home'},

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}