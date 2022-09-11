import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { pipe, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'toh-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  imports: [NgForOf, AsyncPipe, RouterModule, HeroSearchComponent],
  providers: [ComponentStore],
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a
        *ngFor="let hero of heroes$ | async"
        routerLink="/detail/{{ hero.id }}"
      >
        {{ hero.name }}
      </a>
    </div>

    <toh-hero-search></toh-hero-search>
  `,
})
export class DashboardComponent {
  // READ
  readonly heroes$ = this.store.select((s) => s.heroes.slice(1, 5));

  // EFFECTS
  readonly getHeroes = this.store.effect<void>(
    pipe(
      switchMap(() => this.heroService.getHeroes()),
      tapResponse(
        (heroes: Hero[]) => this.store.setState({ heroes }),
        (err) => console.error(err)
      )
    )
  );

  constructor(
    private heroService: HeroService,
    private store: ComponentStore<{ heroes: Hero[] }>
  ) {
    this.store.setState({ heroes: [] });

    this.getHeroes();
  }
}
