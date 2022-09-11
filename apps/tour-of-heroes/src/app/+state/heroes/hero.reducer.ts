import { createReducer, on } from '@ngrx/store';
import { Hero } from '../../hero';
import { HeroActions } from './hero.actions';

const initialState: ReadonlyArray<Hero> = [];

export const heroesReducer = createReducer(
  initialState,
  on(HeroActions.added, (s, { hero }) => [...s, hero]),
  on(HeroActions.removed, (s, { id }) => s.filter((hero) => hero.id !== id)),
  on(HeroActions.retrieved, (_, { heroes }) => heroes),
  on(HeroActions.updated, (s, { hero }) => {
    const heroToUpdate = s.find((h) => h.id === hero.id);

    if (!heroToUpdate) {
      return s;
    }

    return [...s.filter((h) => h.id !== hero.id), hero];
  })
);
