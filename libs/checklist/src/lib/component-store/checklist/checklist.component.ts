import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Checklist } from '../../checklist';
import { ChecklistItemComponent } from '../../checklist-item.component';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'ngconf-ngrx-checklist',
  standalone: true,
  imports: [AsyncPipe, NgForOf, MatToolbarModule, ChecklistItemComponent],
  providers: [ComponentStore],
  template: `
    <section class="checklist">
      <mat-toolbar>{{ name$ | async }}</mat-toolbar>
      <div style="padding: 1rem;">
        <ngconf-checklist-item
          *ngFor="let task of tasks$ | async"
          [task]="task"
          (complete)="completeTask$($event)"
        ></ngconf-checklist-item>
      </div>
    </section>
  `,
  styleUrls: ['./checklist.component.scss'],
})
export class NgRxChecklistComponent {
  @Input() set id(id: string) {
    this.init$(id);
  }

  // READS
  name$ = this.store.select((s) => s.name);
  tasks$ = this.store.select((s) => s.tasks);

  // EFFECTS
  readonly init$ = this.store.effect((id$: Observable<string>) =>
    id$.pipe(
      switchMap((id) => this.api.get(id)),
      tap((result) => this.store.setState(result))
    )
  );

  readonly completeTask$ = this.store.effect((id$: Observable<string>) =>
    id$.pipe(
      switchMap((id) => this.api.completeTask(id).pipe(map(() => id))),
      tap((id) =>
        this.store.patchState((s) => ({
          tasks: s.tasks.filter((task) => task.id !== id),
        }))
      )
    )
  );

  constructor(
    private store: ComponentStore<Checklist>,
    private api: TodoService
  ) {}
}
