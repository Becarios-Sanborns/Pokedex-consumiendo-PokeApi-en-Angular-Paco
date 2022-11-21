import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient) { }

    baseURL = environment.baseURL;

    //OBTENER POKEMON DE LA API
    getPokemons(index:number)
    {
      return this.http.get<any>(this.baseURL+'pokemon/'+index);
    }
    //SE USA EL GET
/*
    getPokemons(limite: number, offset:number){
      return this.http.get("https://pokeapi.co/api/v2/pokemon?limit="+limite+"&offset="+offset);
    }

    getMoreData(name: string){
      return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name)
    }*/
}
