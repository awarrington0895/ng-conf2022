import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = HEROES.find((h) => h.id === id)!;

    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }

  constructor(private messageService: MessageService) {}
}
