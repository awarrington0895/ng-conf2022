import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  selector: 'toh-heroes',
  template: `
    <h2>{{ hero.name | uppercase }}</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div><span>name: </span>{{ hero.name }}</div>
    <div>
      <label for="name">Hero name: </label>
      <input id="name" [(ngModel)]="hero.name" placeholder="name" />
    </div>
  `,
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
