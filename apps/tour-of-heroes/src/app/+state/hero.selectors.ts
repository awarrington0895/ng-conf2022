import { createSelector } from '@ngrx/store';
import { Hero } from '../hero';
import { AppState } from './app.state';

const selectHeroes = (state: AppState) => state.heroes;

export const selectTopFive = createSelector(
  selectHeroes,
  (heroes: ReadonlyArray<Hero>) => heroes.slice(1, 5)
);
