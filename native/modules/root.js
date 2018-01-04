import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import nav from './nav'
import shared, { InitFirebaseEpic } from './shared';
import medications, { UpdateMedicationsEpic } from './med-list'
import updateMedicationsEpic from './med-list/epics/update-medications.epic';

export const createRootEpicMiddleware = (...epics) => {
  const rootEpic = combineEpics(InitFirebaseEpic, updateMedicationsEpic, ...epics)
  const epicMiddleware = createEpicMiddleware(rootEpic);

  return epicMiddleware
}

export const createRootReducer = (reducersMap) => {
  const rootReducer = combineReducers({
    shared,
    nav,
    ...reducersMap,
  })

  return rootReducer
}