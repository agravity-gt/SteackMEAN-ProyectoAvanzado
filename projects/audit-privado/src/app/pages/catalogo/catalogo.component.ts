import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../../../shared/services/services-genericos/pokemon/pokemon.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

pokemons: any[] = [];

constructor(private pokemonService:PokemonService) {}


  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data) =>{
  console.log(data);
  this.pokemons = data.results;
    })

  }

}
