import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentStore } from '@ngrx/component-store';
import { NgRxChecklistComponent } from '../checklist/checklist.component';

@Component({
  selector: 'ngconf-ngrx-checklist-switcher',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, NgRxChecklistComponent],
  providers: [ComponentStore],
  template: `
    <ngconf-ngrx-checklist
      [id]="(counter$ | async) || '1'"
    ></ngconf-ngrx-checklist>
    <button
      style="margin-right: 0.5rem;"
      mat-flat-button
      color="accent"
      (click)="changeCounter(-1)"
    >
      Previous
    </button>
    <button mat-flat-button color="primary" (click)="changeCounter(1)">
      Next
    </button>
  `,
  styleUrls: ['./checklist-switcher.component.scss'],
})
export class NgRxChecklistSwitcherComponent {
  // READS
  readonly counter$ = this.store.select((s) => s.counter.toString());

  readonly changeCounter = this.store.updater((state, amount: number) => ({
    counter: state.counter + amount,
  }));

  constructor(private store: ComponentStore<{ counter: number }>) {
    this.store.setState({ counter: 1 });
  }
}
