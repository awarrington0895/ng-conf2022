import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../+state/app.state';
import { selectTopFive } from '../+state/heroes/hero.selectors';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'toh-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, AsyncPipe, RouterModule, HeroSearchComponent],
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
  readonly heroes$ = this.store.select(selectTopFive);

  constructor(private store: Store<AppState>) {}
}
