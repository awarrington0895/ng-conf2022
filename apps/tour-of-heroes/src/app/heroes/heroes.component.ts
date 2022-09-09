import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'toh-heroes',
  standalone: true,
  styleUrls: ['./heroes.component.css'],
  imports: [NgForOf, NgIf, HeroDetailComponent, RouterModule],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <a routerLink="/detail/{{ hero.id }}">
          <span class="badge">{{ hero.id }}</span> {{ hero.name }}
        </a>
      </li>
    </ul>
  `,
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
