import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task } from './task';

@Component({
  selector: 'ngconf-checklist-item',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card style="margin-bottom: 1rem;">
      <mat-card-title>{{ task.name }}</mat-card-title>
      <mat-card-actions>
        <button mat-button color="warn" (click)="complete.emit(task.id)">
          Done
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class ChecklistItemComponent {
  @Input() task: Task = {
    id: '',
    name: '',
  };

  @Output() complete = new EventEmitter<string>();
}
