import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChecklistItemComponent } from '../../checklist-item.component';
import { ChecklistStore } from '../checklist.store';

@Component({
  selector: 'ngconf-rx-checklist',
  standalone: true,
  imports: [AsyncPipe, NgForOf, MatToolbarModule, ChecklistItemComponent],
  providers: [ChecklistStore],
  template: `
    <section class="checklist">
      <mat-toolbar>{{ store.name$ | async }}</mat-toolbar>
      <div style="padding: 1rem;">
        <ngconf-checklist-item
          *ngFor="let task of store.tasks$ | async"
          [task]="task"
          (complete)="store.completeTask($event)"
        ></ngconf-checklist-item>
      </div>
    </section>
  `,
  styleUrls: ['./checklist.component.scss'],
})
export class RxChecklistComponent {
  @Input() set id(id: string) {
    this.store.init(id);
  }

  constructor(public readonly store: ChecklistStore) {}
}
