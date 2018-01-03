import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import shared, { InitFirebaseEpic } from './modules/shared';


export default function configureStore(navReducer) {
  const rootEpic = combineEpics(InitFirebaseEpic)
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const rootReducer = combineReducers({
    shared,
    nav: navReducer,
  })

  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  return store;
}
