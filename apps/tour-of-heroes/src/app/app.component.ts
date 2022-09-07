import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  standalone: true,
  imports: [HeroesComponent, MessagesComponent],
  selector: 'toh-root',
  template: `
    <h1>{{ title }}</h1>
    <toh-heroes></toh-heroes>
    <toh-messages></toh-messages>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
