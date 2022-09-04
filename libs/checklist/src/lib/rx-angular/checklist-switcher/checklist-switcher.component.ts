import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RxState } from '@rx-angular/state';
import { of, Subject } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { RxChecklistComponent } from '../checklist/checklist.component';

@Component({
  selector: 'ngconf-rx-checklist-switcher',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, RxChecklistComponent],
  providers: [RxState],
  template: `
    <ngconf-rx-checklist [id]="(counter$ | async) || '1'"></ngconf-rx-checklist>
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
export class RxChecklistSwitcherComponent {
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
