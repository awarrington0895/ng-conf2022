import { Component } from '@angular/core';
import {
  NgRxChecklistSwitcherComponent,
  RxChecklistSwitcherComponent,
} from '@ngconf/checklist';

@Component({
  selector: 'pg-root',
  standalone: true,
  imports: [NgRxChecklistSwitcherComponent, RxChecklistSwitcherComponent],
  template: `
    <ngconf-ngrx-checklist-switcher></ngconf-ngrx-checklist-switcher>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-playground';
}
