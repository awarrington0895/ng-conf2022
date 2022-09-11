import { createReducer, on } from '@ngrx/store';
import { MessageActions } from './messages.actions';

const initialState: ReadonlyArray<string> = [];

export const messagesReducer = createReducer(
  initialState,
  on(MessageActions.added, (s, { message }) => [...s, message]),
  on(MessageActions.cleared, () => initialState)
);
