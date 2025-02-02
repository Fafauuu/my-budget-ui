import { createAction, createActionGroup, emptyProps } from '@ngrx/store';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    Login: emptyProps(),
    Logout: emptyProps(),
  },
});
