import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import shared, { InitFirebaseEpic } from './shared';

export const rootEpic = combineEpics(
  InitFirebaseEpic,
);

export const rootReducer = combineReducers({
  shared,
});