import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const MessageActions = createActionGroup({
  source: 'Messages',
  events: {
    Added: props<{ message: string }>(),
    Cleared: emptyProps(),
  },
});
