import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/services-genericos/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
 pokemons: any[] = [];
 name: string='';
 isSquirtlePresente= false;

 items = ['item 1','item 2','item 3']
 
 color: string = 'negro';

 constructor( private  pokemonService:PokemonService) {}

 ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data: any)=> {
        this.pokemons = data.results;
     this.isSquirtlePresente = this.pokemons.some( pokemon => pokemon.name === 'squirtle' );
    })
}

}
