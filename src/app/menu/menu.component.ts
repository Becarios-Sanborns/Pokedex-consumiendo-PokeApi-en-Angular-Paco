import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  displayedColumns: string []=['position','image','name'];
  data : any [] = [];
  dataSource = new MatTableDataSource<any>(this.data)
  pokemons = [];

  @ViewChild(MatPaginator ) paginator!: MatPaginator ;
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.getPokemons();
  }

  //Get Pokemons

  getPokemons(){
    let pokemonInfo;
    for(let i = 1; i<= 150; i++)
    {
      this.dataService.getPokemons(i).subscribe(
        {
          next: res =>{
            pokemonInfo = {position:i,
            image: res.sprites.front_default,
            name: res.name
            };
            this.data.push(pokemonInfo);
            this.dataSource = new MatTableDataSource<any>(this.data);
            this.dataSource.paginator = this.paginator;
          }
        }
        
       );
    }        
  }


  FiltroBusqueda(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if(this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }


  getRow(row:any){
    this.router.navigateByUrl('pokemonInfo/'+row.position)
    console.log(row);
  }
}
