import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon: any = '';
  pokemonImg:any;
  tipos:any=[];
  habilidades:any=[];


  constructor( private dataService: DataService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params =>{
        this.getPokemon(params["id"]);
      }
    );
   }

  ngOnInit(): void {
  }


  getPokemon(id:any)
  {
    this.dataService.getPokemons(id).subscribe(
      res=> {
        console.log(res);
       this.pokemon=res;
       this.pokemonImg=this.pokemon.sprites.front_default;


       res.types.forEach((element: any) => {
        this.tipos.push(element.type.name)
        console.log(element.type.name)
       });

       res.abilities.forEach((element: any) => {
        this.habilidades.push(element.ability.name)
        console.log(element.ability.name);

       });
      }
    )
  }
}
