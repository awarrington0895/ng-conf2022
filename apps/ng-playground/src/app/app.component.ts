import { Component } from '@angular/core';
import { ChecklistSwitcherComponent } from '@ngconf/checklist';

@Component({
  selector: 'pg-root',
  standalone: true,
  imports: [ChecklistSwitcherComponent],
  template: ` <ngconf-checklist-switcher></ngconf-checklist-switcher> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-playground';
}
