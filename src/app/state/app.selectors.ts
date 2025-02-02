import { createFeatureSelector, createSelector } from '@ngrx/store';
import { App } from '../models';
import { AuthStatus } from '../enums';

export const selectAppState = createFeatureSelector<App>('appReducer');

export const getUser = createSelector(selectAppState, (state) => state.user);

export const getAuthState = createSelector(getUser, (user) => user.authStatus);

export const getIsLoggedIn = createSelector(
  getAuthState,
  (authStatus) => authStatus === AuthStatus.LOGGED_IN
);
