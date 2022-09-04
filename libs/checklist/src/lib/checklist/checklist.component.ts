import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RxState } from '@rx-angular/state';
import { Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Checklist } from '../checklist';
import { TodoService } from '../todo.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'ngconf-checklist',
  standalone: true,
  imports: [AsyncPipe, NgForOf, MatCardModule, MatToolbarModule],
  providers: [RxState],
  template: `
    <section class="checklist">
      <mat-toolbar>{{ name$ | async }}</mat-toolbar>
      <div style="padding: 1rem;">
        <mat-card
          style="margin-bottom: 1rem;"
          *ngFor="let task of tasks$ | async"
        >
          <mat-card-title>{{ task.name }}</mat-card-title>
          <mat-card-actions>
            <button
              mat-button
              color="warn"
              (click)="completeTask$.next(task.id)"
            >
              Done
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </section>
  `,
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent {
  @Input() set id(id: string) {
    this.init$.next(id);
  }

  // READS
  name$ = this.state.select('name');
  tasks$ = this.state.select('tasks');

  // EVENTS
  init$ = new Subject<string>();
  completeTask$ = new Subject<string>();

  // HANDLERS
  initHandler$ = this.init$.pipe(switchMap((id) => this.api.get(id)));
  completeTaskHandler$ = this.completeTask$.pipe(
    switchMap((id) => this.api.completeTask(id).pipe(map(() => id)))
  );

  constructor(private state: RxState<Checklist>, private api: TodoService) {
    this.state.connect(this.initHandler$);
    this.state.connect('tasks', this.completeTaskHandler$, (state, id) =>
      state.tasks.filter((t) => t.id !== id)
    );
  }
}
