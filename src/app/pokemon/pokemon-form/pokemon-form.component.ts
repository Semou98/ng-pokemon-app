import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit{

  @Input() pokemon: Pokemon
  types: string[]
  message: string
  isAddForm: boolean

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ){}
  
  ngOnInit(){
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked
    if (isChecked){
      this.pokemon.types.push(type)
    } else{
      const index = this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index, 1)
    }
  }

  onSubmit(): string|void{
    if (this.pokemon.types.length === 0 || this.pokemon.types.length > 3){
      return this.message =`Un pokémon doit avoir un 01 type minimum et 03 au maximum types`
    }
    
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]))
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]))
    }
  }
}

