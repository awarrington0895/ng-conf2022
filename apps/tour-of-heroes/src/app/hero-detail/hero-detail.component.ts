import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../+state/app.state';
import { HeroActions } from '../+state/heroes/hero.actions';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'toh-hero-detail',
  standalone: true,
  styleUrls: ['./hero-detail.component.css'],
  imports: [NgIf, UpperCasePipe, FormsModule],
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div>id: {{ hero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
      </div>
    </div>
    <button type="button" (click)="goBack()">go back</button>
    <button type="button" (click)="save()">save</button>
  `,
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.store.dispatch(HeroActions.updated({ hero: this.hero }));
    }
  }
}
