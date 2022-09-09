import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'toh-hero-search',
  standalone: true,
  imports: [RouterModule, NgForOf, AsyncPipe],
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
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
