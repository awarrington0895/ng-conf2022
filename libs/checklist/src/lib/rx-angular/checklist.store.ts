import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { map, Subject, switchMap } from 'rxjs';
import { Checklist } from '../checklist';
import { TodoService } from '../todo.service';

@Injectable()
export class ChecklistStore extends RxState<Checklist> {
  // READS
  readonly name$ = this.select('name');
  readonly tasks$ = this.select('tasks');

  // EVENTS
  private readonly init$ = new Subject<string>();
  private readonly completeTask$ = new Subject<string>();

  // HANDLERS
  private initHandler$ = this.init$.pipe(switchMap((id) => this.api.get(id)));

  private completeTaskHandler$ = this.completeTask$.pipe(
    switchMap((id) => this.api.completeTask(id).pipe(map(() => id)))
  );

  constructor(private api: TodoService) {
    super();

    this.connect(this.initHandler$);

    this.connect('tasks', this.completeTaskHandler$, (state, id) =>
      state.tasks.filter((t) => t.id !== id)
    );
  }

  init(id: string) {
    this.init$.next(id);
  }

  completeTask(id: string) {
    this.completeTask$.next(id);
  }
}
