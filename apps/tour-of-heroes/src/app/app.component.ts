import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeroActions } from './+state/heroes/hero.actions';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, RouterModule],
  selector: 'toh-root',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <toh-messages></toh-messages>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private store: Store) {
    this.store.dispatch(HeroActions.load());
  }
}
