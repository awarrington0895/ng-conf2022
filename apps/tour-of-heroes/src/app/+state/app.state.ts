import { Hero } from '../hero';

export interface AppState {
  heroes: ReadonlyArray<Hero>;
}
