import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { map, Observable, switchMap } from 'rxjs';
import { Checklist } from '../checklist';
import { TodoService } from '../todo.service';

const handleError = (err: unknown) => console.error(err);

const tapHandle = <T>(fn: (next: T) => void) => tapResponse(fn, handleError);

@Injectable()
export class ChecklistStore extends ComponentStore<Checklist> {
  // SELECTORS
  readonly name$ = this.select((s) => s.name);
  readonly tasks$ = this.select((s) => s.tasks);

  // EFFECTS
  readonly init$ = this.effect((id$: Observable<string>) =>
    id$.pipe(
      switchMap((id) => this.api.get(id)),
      tapHandle((result) => this.setState(result))
    )
  );

  readonly completeTask$ = this.effect((id$: Observable<string>) =>
    id$.pipe(
      switchMap((id) => this.api.completeTask(id).pipe(map(() => id))),
      tapHandle((id) =>
        this.patchState((s) => ({
          tasks: s.tasks.filter((task) => task.id !== id),
        }))
      )
    )
  );

  constructor(private api: TodoService) {
    super();
  }
}
