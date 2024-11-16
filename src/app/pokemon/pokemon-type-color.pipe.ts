import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})

export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'Feu':
        color = 'text-bg-danger';
        break;
      case 'Eau':
        color = 'text-bg-primary';
        break;
      case 'Plante':
        color = 'text-bg-success';
        break;
      case 'Insecte':
        color = 'text-bg-warning';
        break;
      case 'Normal':
        color = 'bg-dark-subtle';
        break;
      case 'Vol':
        color = 'text-bg-info';
        break;
      case 'Poison':
        color = 'bg-danger-subtle';
        break;
      case 'Fée':
        color = 'bg-warning-subtle';
        break;
      case 'Psy':
        color = 'bg-danger-subtle';
        break;
      case 'Electrik':
        color = 'text-bg-warning';
        break;
      case 'Combat':
        color = 'text-bg-secondary';
        break;
      default:
        color = 'bg-light-subtle';
        break;
    }
return `badge ${color} me-1`;
  }
}


