import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

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
  `,
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
