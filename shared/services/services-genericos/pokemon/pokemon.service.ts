import {Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    private apiURL = 'https://pokeapi.co/api/v2/pokemon/'

constructor(
    private http:HttpClient
) {}

getPokemon(): Observable<any> {
return this.http.get(this.apiURL)
}

}