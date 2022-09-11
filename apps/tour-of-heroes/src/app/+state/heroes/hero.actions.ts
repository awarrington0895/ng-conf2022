import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Hero } from '../../hero';

export const HeroActions = createActionGroup({
  source: 'Heroes',
  events: {
    Load: emptyProps(),
    Retrieved: props<{ heroes: Hero[] }>(),
    Remove: props<{ id: number }>(),
    Removed: props<{ id: number }>(),
    Add: props<{ name: string }>(),
    Added: props<{ hero: Hero }>(),
    Update: props<{ hero: Hero }>(),
    Updated: props<{ hero: Hero }>(),
  },
});
