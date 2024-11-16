import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    
      <div class="spinner-border text-success" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    
  `,
})
export class LoaderComponent {}

