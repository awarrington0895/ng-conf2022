import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RxState } from '@rx-angular/state';
import { of, Subject } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { ChecklistComponent } from '../checklist/checklist.component';

@Component({
  selector: 'ngconf-checklist-switcher',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, ChecklistComponent],
  providers: [RxState],
  template: `
    <ngconf-checklist [id]="(counter$ | async) || '1'"></ngconf-checklist>
    <button
      style="margin-right: 0.5rem;"
      mat-flat-button
      color="accent"
      (click)="changeCounter$.next(-1)"
    >
      Previous
    </button>
    <button mat-flat-button color="primary" (click)="changeCounter$.next(1)">
      Next
    </button>
  `,
  styleUrls: ['./checklist-switcher.component.scss'],
})
export class ChecklistSwitcherComponent {
  // READS
  counter$ = this.state.select(
    map((state) => state.counter),
    map((counter: number) => counter.toString())
  );

  // EVENTS
  changeCounter$ = new Subject<number>();

  // HANDLERS
  changeCounterHandler$ = this.changeCounter$.pipe(
    withLatestFrom(this.state.select('counter')),
    mergeMap(([amount, currentCounter]) =>
      of({ counter: currentCounter + amount })
    )
  );

  constructor(private state: RxState<{ counter: number }>) {
    this.state.set('counter', () => 1);
    this.state.connect(this.changeCounterHandler$);
  }
}
