import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone: true,
  imports: [HeroesComponent],
  selector: 'ngconf-root',
  template: `
    <h1>{{ title }}</h1>
    <toh-heroes></toh-heroes>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
