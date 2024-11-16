import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="container d-flex flex-column align-items-center justify-content-center min-vh-95">
    <div class="row">
      <div class="col">
        <img class="img-fluid mx-auto d-block" style="max-width: 50%;" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png">
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h1>Hey, cette page n'existe pas !</h1>
        <p>Il semble que la page que vous cherchez n'est pas disponible. Vous pouvez retourner à l'accueil en cliquant sur le bouton ci-dessous.</p>
        <a routerLink="/pokemons" class="btn btn-primary">Retourner à l'accueil</a>
      </div>
    </div>
  </div>`,

  styles: ``
})
export class PageNotFoundComponent {

}

