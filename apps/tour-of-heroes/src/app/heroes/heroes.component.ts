import { NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgForOf, NgIf],
  selector: 'toh-heroes',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <button
          type="button"
          (click)="onSelect(hero)"
          [class.selected]="hero === selectedHero"
        >
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }}</span>
        </button>
      </li>
    </ul>

    <div *ngIf="selectedHero">
      <h2>{{ selectedHero.name | uppercase }} Details</h2>
      <div>id: {{ selectedHero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input
          id="hero-name"
          [(ngModel)]="selectedHero.name"
          placeholder="name"
        />
      </div>
    </div>
  `,
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
