import { Hero } from '../hero';

export const initialState = {
  heroes: [],
  messages: [],
};

export interface AppState {
  heroes: ReadonlyArray<Hero>;
  messages: ReadonlyArray<string>;
}
