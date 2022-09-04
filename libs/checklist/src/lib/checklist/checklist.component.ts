import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Checklist } from '../checklist';
import { TodoService } from '../todo.service';

@Component({
  selector: 'ngconf-checklist',
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  providers: [RxState],
  template: `
    <section class="checklist">
      <h1>
        <span>{{ name$ | async }}</span>
      </h1>
      <div>
        <article class="task" *ngFor="let task of tasks$ | async">
          <h2>{{ task.name }}</h2>
          <button class="answer-button" (click)="completeTask$.next(task.id)">
            Done
          </button>
        </article>
      </div>
    </section>
  `,
  styleUrls: ['./checklist.component.css'],
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
