import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My Library</h1>
  <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/science" routerLinkActive="active">Science</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
