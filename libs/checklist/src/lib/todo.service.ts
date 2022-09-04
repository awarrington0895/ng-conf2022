import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Checklist } from './checklist';

const checklists: Checklist[] = [
  {
    id: '1',
    name: 'Groceries',
    tasks: [
      {
        id: '1',
        name: 'Bananas',
      },
      {
        id: '3',
        name: 'Steak',
      },
    ],
  },
  {
    id: '2',
    name: 'Empty Checklist',
    tasks: [],
  },
  {
    id: '3',
    name: 'Tarkov Tasks',
    tasks: [
      {
        id: '4',
        name: 'Nostalgia',
      },
      {
        id: '5',
        name: 'Vitamins Part 1',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  completeTask(id: string): Observable<string> {
    return of(id);
  }

  get(id: any): Observable<Checklist> {
    const checklist = checklists.find((checklist) => checklist.id === id);

    return of(checklist || checklists[0]);
  }
}
