import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'toh-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  imports: [NgForOf, RouterModule, HeroSearchComponent],
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}">
        {{ hero.name }}
      </a>
    </div>

    <toh-hero-search></toh-hero-search>
  `,
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
