import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RxState } from '@rx-angular/state';
import { Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Checklist } from '../../checklist';
import { ChecklistItemComponent } from '../../checklist-item.component';
import { TodoService } from '../../todo.service';

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
  readonly name$ = this.state.select('name');
  readonly tasks$ = this.state.select('tasks');

  // EVENTS
  readonly completeTask$ = new Subject<string>();

  private readonly init$ = new Subject<string>();

  // HANDLERS
  private readonly initHandler$ = this.init$.pipe(
    switchMap((id) => this.api.get(id))
  );

  private readonly completeTaskHandler$ = this.completeTask$.pipe(
    switchMap((id) => this.api.completeTask(id).pipe(map(() => id)))
  );

  constructor(private state: RxState<Checklist>, private api: TodoService) {
    this.state.connect(this.initHandler$);

    this.state.connect('tasks', this.completeTaskHandler$, (state, id) =>
      state.tasks.filter((t) => t.id !== id)
    );
  }
}
