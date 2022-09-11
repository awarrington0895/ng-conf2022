import { Hero } from '../hero';

export const initialState = {
  heroes: [],
};

export interface AppState {
  heroes: ReadonlyArray<Hero>;
}
