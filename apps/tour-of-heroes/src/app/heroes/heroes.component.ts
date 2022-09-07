import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'toh-heroes',
  standalone: true,
  styleUrls: ['./heroes.component.css'],
  imports: [NgForOf, NgIf, HeroDetailComponent],
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

    <toh-hero-detail [hero]="selectedHero"></toh-hero-detail>
  `,
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
