import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Hero } from '../hero';

export const HeroActions = createActionGroup({
  source: 'Heroes',
  events: {
    Load: emptyProps(),
    Retrieved: props<{ heroes: Hero[] }>(),
    Removed: props<{ id: number }>(),
    Added: props<{ hero: Hero }>(),
    Updated: props<{ hero: Hero }>(),
  },
});
