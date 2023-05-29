import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './audit-generico/pokemon-component/pokemon-list.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    PokemonListComponent

  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    PokemonListComponent
  ],
  providers: []
})
export class componentesGenericos { }
