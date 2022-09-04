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

const get = async (id: string): Promise<Checklist> =>
  checklists.find((checklist) => checklist.id === id) || checklists[0];

export { get };
