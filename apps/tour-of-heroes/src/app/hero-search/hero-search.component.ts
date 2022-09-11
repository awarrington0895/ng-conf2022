import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'toh-hero-search',
  standalone: true,
  imports: [RouterModule, NgForOf, AsyncPipe],
  providers: [ComponentStore],
  template: `
    <div id="search-component">
      <label for="search-box">Hero Search</label>
      <input #searchBox id="search-box" (input)="search(searchBox.value)" />

      <ul class="search-result">
        <li *ngFor="let hero of heroes$ | async">
          <a routerLink="/detail/{{ hero.id }}">
            {{ hero.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent {
  readonly heroes$ = this.componentStore.select((s) => s.heroes);

  constructor(
    private heroService: HeroService,
    private componentStore: ComponentStore<{ heroes: ReadonlyArray<Hero> }>
  ) {}

  readonly search = this.componentStore.effect((term$: Observable<string>) =>
    term$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
      tapResponse(
        (heroes: ReadonlyArray<Hero>) =>
          this.componentStore.setState({ heroes }),
        console.error
      )
    )
  );
}
