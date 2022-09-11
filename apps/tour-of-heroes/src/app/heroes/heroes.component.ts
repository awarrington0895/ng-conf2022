import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../+state/app.state';
import { HeroActions } from '../+state/heroes/hero.actions';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'toh-heroes',
  standalone: true,
  styleUrls: ['./heroes.component.css'],
  imports: [NgForOf, NgIf, AsyncPipe, HeroDetailComponent, RouterModule],
  template: `
    <h2>My Heroes</h2>
    <div>
      <label for="new-hero">Hero name: </label>
      <input style="border: 1px dashed black;" id="new-hero" #heroName />

      <button
        type="button"
        class="add-button"
        (click)="add(heroName.value); heroName.value = ''"
      >
        Add hero
      </button>
    </div>
    <ul class="heroes">
      <li *ngFor="let hero of heroes$ | async">
        <a routerLink="/detail/{{ hero.id }}">
          <span class="badge">{{ hero.id }}</span> {{ hero.name }}
        </a>
        <button
          type="button"
          class="delete"
          title="delete hero"
          (click)="delete(hero)"
        >
          x
        </button>
      </li>
    </ul>
  `,
})
export class HeroesComponent {
  readonly heroes$ = this.store.select('heroes');

  constructor(private store: Store<AppState>) {}

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.store.dispatch(HeroActions.add({ name }));
  }

  delete(hero: Hero): void {
    this.store.dispatch(HeroActions.remove({ id: hero.id }));
  }
}
