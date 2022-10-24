import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'ng-playground';

  ngOnInit() {
    if (typeof Worker !== undefined) {
      const worker = new Worker(new URL('./sha1.worker', import.meta.url));

      // const worker = new Worker('./sha1.worker');

      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };

      worker.postMessage('hello');
    } else {
      console.log('Web workers not supported');
    }
  }
}
