import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <div *ngIf="pokemon" class="text-center">
      <h2>Editer {{pokemon.name}}</h2>
        <img [src]="pokemon.picture" class="img-fluid mb-4 col-4 col-md-3 col-lg-2">
    </div>
    
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon|undefined

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon)
    } else{
      this.pokemon = undefined
    }
  }
}

