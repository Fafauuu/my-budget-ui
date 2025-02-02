import { createReducer, on } from '@ngrx/store';
import { App, User } from '../models';
import { AuthStatus } from '../enums';
import { AppActions } from '.';

export const initialState: App = {
  user: { authStatus: AuthStatus.LOGGED_OUT },
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.login, (state) => ({
    ...state,
    user: { ...state.user, authStatus: AuthStatus.LOGGED_IN },
  })),
  on(AppActions.logout, (state) => ({
    ...state,
    user: { ...state.user, authStatus: AuthStatus.LOGGED_OUT },
  }))
);
