import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import nav from './nav'
import {
  userReducer as user, firebaseReducer as firebase,
  InitAuthEpic, InitFirebaseEpic, LoginUserEpic
} from './user';
import medications, { UpdateMedicationsEpic } from './med-list'

export const createRootEpicMiddleware = (...epics) => {
  const rootEpic = combineEpics(
    InitAuthEpic, InitFirebaseEpic, LoginUserEpic,
    UpdateMedicationsEpic,
    ...epics
  )

  const epicMiddleware = createEpicMiddleware(rootEpic);

  return epicMiddleware
}

export const createRootReducer = (reducersMap) => {
  const rootReducer = combineReducers({
    firebase,
    user,
    nav,
    medications,
    ...reducersMap,
  })

  return rootReducer
}