import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RxState } from '@rx-angular/state';
import { Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Checklist } from '../../checklist';
import { TodoService } from '../../todo.service';
import { ChecklistItemComponent } from '../../checklist-item.component';

@Component({
  selector: 'ngconf-rx-checklist',
  standalone: true,
  imports: [AsyncPipe, NgForOf, MatToolbarModule, ChecklistItemComponent],
  providers: [RxState],
  template: `
    <section class="checklist">
      <mat-toolbar>{{ name$ | async }}</mat-toolbar>
      <div style="padding: 1rem;">
        <ngconf-checklist-item
          *ngFor="let task of tasks$ | async"
          [task]="task"
          (complete)="completeTask$.next($event)"
        ></ngconf-checklist-item>
      </div>
    </section>
  `,
  styleUrls: ['./checklist.component.scss'],
})
export class RxChecklistComponent {
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
